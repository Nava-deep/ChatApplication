$(document).ready(()=>{
    $("#upload").on("click",(e)=>{
        $("#file").click();
        $("#file").on("change",(r)=>{
            d = new FormData();
            d.append("csrfmiddlewaretoken",$("#file").data('csrf'));
            d.append("file",$("#file")[0].files[0]);
            d.append("token","1");
            $.ajax({
                type: "POST",
                url: $("#file").data("url"),
                data: d,
                processData:false,
                contentType:false,
                success: (d)=>{
                    $("#pic").attr("src",d.url);
                }
            });
        })
    })

    $("#edit").on("click",(e)=>{
        $("#edit").css("display","none");
        $("#holder").css({ "filter": "blur(2px)","pointer-events":"none"});
        $(".des").show();
        $("#des").on("focus",(r)=>{
            $("#des").attr("placeholder","Write some description...")
        })
        $("#ok").on("click",(e)=>{
            e.preventDefault();
            if($("#des").val()!=""){
            $.ajax({
                type: "POST",
                url: $("#file").data('url'),
                data: {
                    'des':$("#des").val(),
                    "csrfmiddlewaretoken":$("#file").data("csrf"),
                    "token":"2"
                },
                success: (e)=>{
                    $("#holder").css({ "filter": "blur(0)","pointer-events":"initial"});
                    $(".des").hide();
                    $("#edit").css("display","initial");
                    $("#para").text($("#des").val())
                }
            });
            }
            else{
                $("#des").attr("placeholder","Empty description is not allowed")
            }
        })
        $("#cancel").on("click",(e)=>{
            $("#holder").css({ "filter": "blur(0)","pointer-events":"initial"});
            $(".des").hide();
            $("#edit").css("display","initial");
        })
    });
});