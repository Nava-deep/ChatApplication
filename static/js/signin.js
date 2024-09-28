$(document).ready((e)=>{
    $('#submit').on("click",(e)=>{
        
        $.ajax({
            type:"POST",
            url:"{% url 'signin' %}",
            data:{
                username:$("#username").val(),
                password:$("#password").val(),
                email:$("#email").val(),
                csrfmiddlewaretoken:$("#csrf").val(),
            },
        })
    })
})