$(document).ready(function() {
    setTimeout(()=>{
        initanimation();
        setTimeout(()=>{$("#homel").css("top","0px");} , 75*0);
        setTimeout(()=>{$("#aboutl").css("top","0px");} , 75*1);
        setTimeout(()=>{$("#availibilityl").css("top","0px");} , 75*2);
        setTimeout(()=>{$("#mapsl").css("top","0px");} , 75*3);
        $("#homel").attr('class', 'optionsOnPage');
    },300);
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

var currentPage = 0;

function highlight(obj){
    obj.className = "optionshighlight";
}

function unhighlight(obj,pageNum){
    obj.className = "options";
    if(currentPage == pageNum){
        obj.className = "optionsOnPage";
    }
}

function changeContext(obj,pageNum){

    var formation;
    currentPage = pageNum;

    switch(pageNum){
        case 0: formation = ["0%","100%","200%","300%"]; break;
        case 1: formation = ["-100%","0%","100%","200%"]; break;
        case 2: formation = ["-200%","-100%","0%","100%"]; break;
        case 3: formation = ["-300%","-200%","-100%","0%"]; break;
    }
    $("#homel").attr('class', 'options');
    $("#aboutl").attr('class', 'options');
    $("#availibilityl").attr('class', 'options');
    $("#mapsl").attr('class', 'options');

    for(var i=0;i<4;i++){
        $(".fill")[i].style.left = formation[i];
    }
    obj.className = "optionsOnPage";
}