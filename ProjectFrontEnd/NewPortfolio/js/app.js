let posX=0;
let slides=document.querySelector('.slides')
function changePageRight(){
posX+=100;
slides.style.left = `${pos}px`
}
function changePageLeft(){
    posX-=100
    slides.style.left = `${pos}px`
}

