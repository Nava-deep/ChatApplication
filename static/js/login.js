$(document).ready(()=>{

    $("#username").on("focus",(e)=>{
        $("#username").css({"border":"2px solid black"});
        $("#h1").hide();
    })

    $("#password").on("focus",(e)=>{
        $("#password").css({"border":"2px solid black"});
        $("#h2").hide();
    })

    $('#form').on("submit click",(e)=>{
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
                    $("#h1").show();
                    $("#h1").css({"color":"red",'margin-top':'-20px','margin-bottom':'0px'});
                }
                else if(z.token == 1)
                {
                    $("#password").css({"border":"2px solid red"})
                    $("#h2").show();
                    $("#h2").css({"color":"red",'margin-top':"-20px",'margin-bottom':'0px'});
                }
                else{
                    window.location.href = z.url;
                }
            }
        })
})
})