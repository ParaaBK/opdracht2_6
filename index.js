window.addEventListener('load', slideshowSetup);

let slideIndex = 0

function slideshowSetup(){
document.getElementById('slideshow-next').addEventListener('click', slideshowNext);
}

function slideshowNext() {

let slides = document.getElementsByClassName('slide');
;


slides[slideIndex].classList.remove('visible');

slideIndex ++;

if(slideIndex == slides.length) {
    slideIndex = 0;
}

slides[slideIndex].classList.add('visible');

}
