$(document).ready(()=>{
    let typ;
    $("#text").on("input",function(){
        if($(this).val()==""){
            $("#caseflex").empty();
            return;
        };
        clearTimeout(typ)
        f = $("#caseflex");
        f.empty();
        typ = setTimeout(()=>{
        $.ajax({
            type: "POST",
            url: $("#get").data("url"),
            data: {
                text:$("#text").val(),
                csrfmiddlewaretoken:$("#get").data("csrf"),
            },
            success: (e)=>{
                for(d of e.result)
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
                    t.href = d.chat;
                    img.src = d.img_src;
                    a.href = d.user_profile;
                    g = document.createTextNode(d.username);
                    r.appendChild(img);
                    s.appendChild(g)
                    a.appendChild(s);
                    r.appendChild(a);
                    r.appendChild(t)
                    main.appendChild(r)
                    f.append(main);
                }
            }
        })
    ,2000});
    })

    $("button").on("mouseover",(r)=>{
        $("a").attr("href","#");
    })

    $("button").on("mouseout",(r)=>{
        $("a").attr("href","initial");
    })

})