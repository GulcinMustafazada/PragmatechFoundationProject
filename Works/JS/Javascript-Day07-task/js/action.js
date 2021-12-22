
function changeBgColor(){
document.body.style.background="red"
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
// function findWord(){
//   let result= text.includes('prroqrmçı')
//   document.querySelector('.card p').innerHTML=result
//   document.querySelector('.card div').innerHTML=`Nəticə: ${result}`
// }