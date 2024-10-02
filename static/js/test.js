$(document).ready(()=>{

    $("#d").css({"background":"red","width":"10px","height":"100px","margin-left":"50%"})
    $("#hello").css("margin-left","50%")
    $("#hello").click((e)=>{
        $("#hello").css({"position":"relative"})
        $("#hello").animate({"left":"15px"},50)
                   .animate({"left":"-15px"},50)
                   .animate({"left":"10px"},50)
                   .animate({"left":"-10px"},50)
                   .animate({"left":"5px"},50)
                   .animate({"left":"-5px"},50)
                   .animate({"left":"0px"},50)
    })
})