$(document).ready(()=>{

    $("#username").on("focus",(e)=>{
        $("#username").css({"border":"2px solid black"});
        $("#h1").hide();
    })

    $("#password").on("focus",(e)=>{
        $("#password").css({"border":"2px solid black"});
        $("#h2").hide();
    })

    $('#submit').on("submit click",(e)=>{
        e.preventDefault();
        $.ajax({
            type:"POST",
            url:$("#csrf").data("url"),
            data:{
                username:$("#username").val(),
                password:$("#password").val(),
                csrfmiddlewaretoken:$("#csrf").val(),
            },
            success:(z)=>{
                if(z.token == 3)    
                {
                    $("#username").css({"border":"2px solid red"})
                    $("#h1").show().css({"color":"red",'margin-top':'-20px','margin-bottom':'0px'});
                    $("#username").css("position", "relative");
                    $("#username").animate({"left":"-200px"},50)
                                  .animate({"left":"200px"},50)
                                  .animate({"left":"-100px"},50)
                                  .animate({"left":"100px"},50)
                                  .animate({"left":"-50px"},50)
                                  .animate({"left":"50px"},50)
                                  .animate({"left":"0px"},50)
                }
                else if(z.token == 1)
                {
                    $("#password").css({"border":"2px solid red"})
                    $("#h2").show().css({"color":"red",'margin-top':"-20px",'margin-bottom':'0px'});
                    $("#password").css("position", "relative");
                    $("#password").animate({"left":"-200px"},50)
                                  .animate({"left":"200px"},50)
                                  .animate({"left":"-100px"},50)
                                  .animate({"left":"100px"},50)
                                  .animate({"left":"-50px"},50)
                                  .animate({"left":"50px"},50)
                                  .animate({"left":"0px"},50)
                }
                else{

                    window.location.href = z.url;
                }
            }
        })
})
})