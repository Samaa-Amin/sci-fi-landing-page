
$(document).ready(function(){
    if($(window).width() <= 800){
        $(".light").attr("src", "../414X896.png"); 
        $(".dark").attr("src", "../dark.png"); 
    } 
});

var pos = document.documentElement;
pos.addEventListener("mousemove", e =>{
    pos.style.setProperty('--x',e.clientX +"px");
    pos.style.setProperty('--y',e.pageY +"px");
})

