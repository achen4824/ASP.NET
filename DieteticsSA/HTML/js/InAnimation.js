$(document).ready(function() {
    initanimation();
});

//detect resize and remove large elements
$(window).resize(function() {
    initanimation();
});

function initanimation(){
    //resize just happened, pixels changed
    const vw = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);

    //large screens
    if(vw > 700){
        $("#intro").css("width", "550px");
        $("#intro").css("height", "150px");
        $("#intro").css("margin-top", "75px");
        $("#logo").css("transform", "rotate(0deg)");

        //second stage opening
        setTimeout(()=>{
            $("#seperator").css("height","75%");
            $("#title").css("opacity","1");
            $("#details").css("opacity","1");
        },300);

    //small screens
    }else{
        $("#logo").css("transform", "rotate(0deg)");
        $("#intro").css("width", "150px");
        $("#intro").css("height", "150px");
        $("#intro").css("margin-top", "75px");
        $("#seperator").css("height","0%");
        $("#details").css("opacity", "0");
    }
}