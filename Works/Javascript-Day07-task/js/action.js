let element=document.querySelector('body')
function changeBgColor(){
    element.style.background="red"
}
let title=document.querySelector('h1')
function changeTitleColor(){
    title.style.color="blue"
}
let text=document.querySelector('.card > p ')
let text1=document.querySelector('.card > ul')
function changeTextColor(){
    text.style.color="green"
    text1.style.color="green"
}
let image=document.querySelector('img')
function addBorder(){
    image.style.border="10px solid black"
}


function replaceImage(){
let image1=document.createImageBitmap("images/2.jpg")
image.replaceChild(image1,image)
}

let txt1=document.querySelector('li').childNodes[0]
let txt2=document.querySelector('li').childNodes[6]
function changeText(){
  document.replaceChild(txt1,txt2)
}