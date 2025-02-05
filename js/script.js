let nav =document.getElementById('nav');
let navhover =document.getElementById('navhover');
// let logo =document.getElementById('logo').src;
let as =document.querySelectorAll('nav a');
let imgSrc = document.getElementById("logo");

window.onscroll = function () {
    let scrollPosition = window.scrollY;
    if(scrollPosition > 150){
        nav.style.display="none";
        navhover.style.display="block";
    }else{
        nav.style.display="block";
        navhover.style.display="none";
    }
};