let uchenna_img = document.querySelector('#uchenna-picture');

uchenna_img.onclick = function() {
    let uchenna_img_src = uchenna_img.getAttribute('src');

    if(uchenna_img_src === './images/uchenna-picture.jpg'){
        uchenna_img.setAttribute('src', './images/adesanya-img.jpg');
    }else{
        uchenna_img.setAttribute('src', './images/uchenna-picture.jpg')
    }

    
}

let change_usr_btn = document.querySelector('.change-user-btn');
let website_header = document.querySelector('.name-header');

function setUserName() {

    let myName = prompt('Please enter your name.');

    if(!myName){
        alert("please enter your name in the text box.");
        setUserName();
    }else{
        localStorage.setItem('name', myName);
        website_header.textContent = "Welcome to Uchenna's Website, " + myName;
    }




}

if(!localStorage.getItem('name')){
    setUserName();
}else{
    let storedName = localStorage.getItem('name');
    website_header.textContent = "Welcome to Uchenna's Website, " + storedName;
}

change_usr_btn.onclick = function() {
    setUserName();
}