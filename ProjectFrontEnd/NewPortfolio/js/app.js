let pos=0;
let sliderW = document.querySelector('.slider').clientWidth;
let slides=document.querySelector('.slides')
let slide = document.querySelector('.slide');
let allSlides = document.querySelectorAll('.slide') 
let slideSayi = allSlides.length; 


function changePage() {
    if (pos >= 0) {
        pos = 0
        slides.style.left = 100
    } else {
        pos += sliderW;
        slides.style.left = -100
    }


}

