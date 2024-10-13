$(document).ready(()=>{
    $("#text").on("input",(r)=>{
        f = $("#caseflex");
        f.empty();
        $.ajax({
            type: "POST",
            url: $("#get").data("url"),
            data: {
                text:$("#text").val(),
                csrfmiddlewaretoken:$("#get").data("csrf"),
            },
            success: (e)=>{
                if(JSON.parse(e.d)==false){return;}
                x = JSON.parse(e.result)
                for(d in x)
                {
                    let r = document.createElement("div");
                    let main = document.createElement("div");
                    let s = document.createElement("span");
                    let a = document.createElement("a");
                    let t = document.createElement("a");
                    let img = document.createElement("img")
                    t.innerText = "Message";
                    r.className = "inner";
                    a.className = "outer";
                    t.className = "innerA"
                    main.className = "main";
                    t.href = "/chat/chat/"+x[d].fields['user'];
                    img.src = "/media/"+x[d].fields.img;
                    a.href = '/chat/profile/'+x[d].pk;
                    $.ajax({
                        type: "POST",
                        url: $("#text").data("get"),
                        data: {
                            "id":x[d].fields.user,
                            "csrfmiddlewaretoken":$("#get").data("csrf")
                        },
                        success: (q)=>{
                            g = document.createTextNode(q.user);
                            r.appendChild(img);
                            s.appendChild(g)
                            a.appendChild(s);
                            r.appendChild(a);
                            r.appendChild(t)
                            main.appendChild(r)
                            f.append(main);
                        }
                    });
                }
            }
        });
    })

    $("button").on("mouseover",(r)=>{
        $("a").attr("href","#");
    })

    $("button").on("mouseout",(r)=>{
        $("a").attr("href","initial");
    })

})