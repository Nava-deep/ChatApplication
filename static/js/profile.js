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

    $(".material-symbols-outlined").on("click",(e)=>{
        $(".material-symbols-outlined").css("display","none");
        $(".des").show();
        $(".des").css({
            "width":"800px",
            'height':"200px",
            "background-color":"black",
            'position':"absolute",
            'top':"300px",
        })
        $("#loki").css({
            "display":"flex",
            "flex-direction":"column",
            "justify-content":"center",
            "align-items":"center"
        });
        $("#loki2").css({
            "display":"flex",
            "gap":"20px",
            "margin-top":"10px",
            "justify-content":"center",
            "align-items":"center"
        });
        $("#holder").css({ "filter": "blur(2px)","pointer-events":"none"});
        $("#des").css({
            "width":"500px",
            "height":"40px",
            "border-radius":"10px",
        });
        $("#ok,#cancel").css({
            "background-color": "black",
            "border": "1px solid white",
            "transition": "all 200ms",
            "width": "max-content",
            "padding":"10px",
            "cursor":"pointer",
            "height": "max-content",
            "color":"white",
            "border-radius":"5px",
            "font-size":"15px",
        })
    });
});