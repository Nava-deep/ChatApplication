$(document).ready((e)=>{

    $("#username").on("focus click",(e)=>{
        $("#username").css({"border":"2px solid black"});
        $("#h1").hide();
    })

    $("#email").on("focus click",(e)=>{
        $("#email").css({"border":"2px solid black"});
        $("#h2").hide();
    })

    $('#submit').on("submit click",(e)=>{
        e.preventDefault();
        $.ajax({
            type:"POST",
            url:$("#csrf").data('url'),
            data:{
                username:$("#username").val(),
                password:$("#password").val(),
                email:$("#email").val(),
                csrfmiddlewaretoken:$("#csrf").val(),
            },
            success:(w)=>{
                if(w.token == 1)
                {
                    $("#username").css({"border":"2px solid red"});
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
                else if(w.token == 2)
                {
                    $("#email").css({"border":"2px solid red"})
                    $("#h2").show().css({"color":"red",'margin-top':'-20px','margin-bottom':'0px'});
                    $("#email").css("position", "relative");
                    $("#email").animate({"left":"-200px"},50)
                                  .animate({"left":"200px"},50)
                                  .animate({"left":"-100px"},50)
                                  .animate({"left":"100px"},50)
                                  .animate({"left":"-50px"},50)
                                  .animate({"left":"50px"},50)
                                  .animate({"left":"0px"},50)
                }
                else{
                    window.location.href = w.url;
                }
            }
        })
    })
})