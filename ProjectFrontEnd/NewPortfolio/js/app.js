let posX = 0;
let slides = document.querySelector('.slides')

function changePageRight() {
    posX += 100;
    slides.style.left = `${pos}px`
}

let errorField = document.querySelector('.form-element p')

function getFormData(e) {
    e.preventDefault();
    let nameValue = e.srcElement.querySelector('[name=name]').value;
    let emailValue = e.srcElement.querySelector('[name=email]').value;
    let subjectValue = e.srcElement.querySelector('[name=subject]').value;
    let messageValue = e.srcElement.querySelector('[name=message]').value;
    console.log(nameValue, emailValue, subjectValue, messageValue)
}

function checkFunc(e) {
    if (e.target.value == '') {
        errorField.innerHTML = 'Please fill out this field'
        e.target.style.border = '1px solid #fff'
        e.target.style.background = "#fff"
    } else {
        errorField.innerHTML = ''
        e.target.style.border = '1px solid white'
    }
}

function checkFunc(e) {
    if (e.target.value == '') {
        errorField.innerHTML = 'Please fill out this field'
        e.target.style.border = '1px solid red'
    } else {
        errorField.innerHTML = ''
        e.target.style.border = '1px solid white'
    }
}