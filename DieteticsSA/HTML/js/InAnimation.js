$(document).ready(function() {
    // all custom jQuery will go here
    
    $("#intro").css("width", "575px");
    $("#intro").css("height", "150px");
    $("#intro").css("margin-top", "75px");
    $("#logo").css("transform", "rotate(0deg)");

    //second stage opening
    setTimeout(()=>{
        $("#seperator").css("height","75%");
        $("#title").css("opacity","1");
        $("#details").css("opacity","1");
    },300);
});