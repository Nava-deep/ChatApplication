$(document).ready((e)=>{

    $("#username").on("focus",(e)=>{
        $("#username").css({"border":"2px solid black"});
        $("#h1").hide();
    })

    $("#email").on("focus",(e)=>{
        $("#email").css({"border":"2px solid black"});
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
                    $("#h1").show();
                    $("#h1").css({"color":"red",'margin-top':'-20px','margin-bottom':'0px'});
                }
                else if(w.token == 2)
                {
                    $("#email").css({"border":"2px solid red"})
                    $("#h2").show();
                    $("#h2").css({"color":"red",'margin-top':'-20px','margin-bottom':'0px'});
                }
                else{
                    window.location.href = w.url;
                }
            }
        })
    })
})