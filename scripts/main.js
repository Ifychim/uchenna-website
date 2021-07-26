let uchenna_img = document.querySelector('#uchenna-picture');

uchenna_img.onclick = function() {
    let adesanya_img = uchenna_img.getAttribute('src');

    if(adesanya_img === './images/uchenna-picture.jpg'){
        uchenna_img.setAttribute('src', './images/adesanya-img.jpg');
    }else{
        uchenna_img.setAttribute('src', './images/uchenna-picture.jpg')
    }

    
}