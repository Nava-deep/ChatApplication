$(document).ready((e)=>{

    $("#username").on("focus",(e)=>{
        $("#username").css({"border":"2px solid black"}).removeClass("animate");
        $("#h1").hide();
    })

    $("#email").on("focus click",(e)=>{
        $("#email").css({"border":"2px solid black"}).removeClass("animate");
        $("#h2").hide();
    })

    $('#form').on("submit",(e)=>{
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
                    $("#username").animate({ left: "-200px" }, 100,"easeInBounce")
                                  .animate({ left: "400px" }, 100,"easeInBounce")
                                  .animate({ left: "-400px" }, 100,"easeInBounce")
                                  .animate({ left: "400px" }, 100,"easeInBounce")
                                  .animate({ left: "-400px" }, 100,"easeInBounce")
                                  .animate({ left: "0px" }, 100,"easeInBounce")
                }
                else if(w.token == 2)
                {
                    $("#email").css({"border":"2px solid red"})
                    $("#h2").show().css({"color":"red",'margin-top':'-20px','margin-bottom':'0px'}).addClass("animate");
                }
                else{
                    window.location.href = w.url;
                }
            }
        })
    })
})