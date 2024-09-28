$(document).ready(()=>{
    $('#form').on("submit",(e)=>{
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
                if(e.token == 1)    
                {
                    var d = document.createElement("div")
                    var f = document.createTextNode("Invalid Username or Password")
                    d.appendChild(f)
                    d.setAttribute("id","msg")
                    $("#password").after(d);
                    $("#msg").css({"color":"red","margin-top":"10px"});
                }
            }
        })
})
})