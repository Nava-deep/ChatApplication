$(document).ready(()=>{
    $("#b").click((e)=>{
    $.ajax({
        type: "POST",
        url: $("#a").val(),
        data: {
            token:1,
            csrfmiddlewaretoken:$("#c").val(),
        },
        success:(d)=>{
            window.location.href = d.url;
        }
    });
})
})