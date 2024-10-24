$(document).ready(()=>{
    $("#click")[0].attributes.disabled = true;
    setTimeout((r)=>{
        console.log("sfsdf")
        $("#click")[0].attributes.disabled = false;
    },2000)
    $("#click").on('click',(t)=>{
        console.log("sfsdf")
        $("#audio")[0].muted = false;
    })
});