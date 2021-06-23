/* start menu */
// when click on menu-bar show menu
let menu = document.querySelector('.menu .menu-bar .icon');
menu.addEventListener('click',function(){
    document.querySelector('.slide-menu').style.width = "15%";
});
// when click on closebtn remove menu
let closebtn = document.querySelector('.slide-menu .closebtn');
closebtn.addEventListener('click',function(){
    document.querySelector('.slide-menu').style.width = "0";
});
/* end menu*/ 

// // ercond menu navbar
let navBar = document.querySelector('.navbar');
let menu_icon = document.querySelector('.menu ');
let menuBr = document.querySelector('.slide-menu');

window.addEventListener('scroll',function(){
    if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
        menu_icon.style.display = 'none';
        menuBr.style.display = 'none';
        navBar.style.display = 'block';
    }else{
        menu_icon.style.display = 'block';
        menuBr.style.display = 'block';
        navBar.style.display = 'none';
    }
});

 //dynamic box padding for navbar
let menuBar = document.querySelector('.navbar');
let content = document.querySelectorAll('.box');

menuBar.addEventListener('click',function(){
    for(let i = 0; i < content.length; i++){
        content[i].style.paddingTop = menuBar.clientHeight + 'px';
    }
});

/* start our-work */
// when click on show more show more images and when click on show less hide images
let showBtn = document.querySelector('#show');
let lessBtn = document.querySelector('#less');
let showImages = document.querySelectorAll('.our-work .work .work-images .show');

showBtn.addEventListener('click',function(){
    for(let i=0; i<showImages.length; i++){
        showImages[i].style.display = "block";
        showBtn.style.cssText = "display:none;";
        lessBtn.style.cssText = "display:block; margin:0 auto;";
        if(showImages[i].style.display = "block"){
            lessBtn.addEventListener('click',function(){
                showImages[i].style.display = "none";
                showBtn.style.cssText = "display:block; margin:0 auto;";
                lessBtn.style.cssText = "display:none;";
            });
        }
    }
});
/* end our-work */

//scroll-slide
let bodyScroll = document.querySelector('html,body');
let iconScroll = document.querySelector('.scroll-slide .icon');
window.addEventListener('scroll', function(){
    if(bodyScroll.scrollTop >=180){
        // console.log('test');
        iconScroll.style.display = 'block';
    }else{
        // console.log('test1');
        iconScroll.style.display = 'none';
    }
});

// validation form
let subject = document.querySelector('.subject');
let email = document.querySelector('.email');
let message = document.querySelector('.message');


subject.addEventListener('blur',function(){
    if(this.value.length < 2 || this.value.length === " "){
        this.classList.add('border', 'border-danger');
        this.classList.remove('border', 'border-success');
        document.querySelector('.helper-text').textContent = 'Please  Insert your Subject' ;
        document.querySelector('.helper-text').classList.add('text-danger');
    }else {
        this.classList.add('border', 'border-success');
        this.classList.remove('border', 'border-danger');
        document.querySelector('.helper-text').textContent = ' ' ;
    }
});

let mailFormait = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

email.addEventListener('blur', function(){
    if(this.value.match(mailFormait)){
        this.classList.add('border', 'border-success');
        this.classList.remove('border', 'border-danger');
        document.querySelector('.helper-email').textContent = ' ' ;
    }else{
        this.classList.add('border', 'border-danger');
        this.classList.remove('border', 'border-success');
        document.querySelector('.helper-email').textContent = 'Please  Insert your email ex: personal-info@example.com' ;
        document.querySelector('.helper-email').classList.add('text-danger');
    }
});

let messageFormait = /^\s*$/g ;

message.addEventListener('blur', function(){
    if(this.value.match(messageFormait) || this.value.indexOf('\n') != -1){
        this.classList.add('border', 'border-danger');
        this.classList.remove('border', 'border-success');
        document.querySelector('.helper-message').textContent = 'Please Insert your message ' ;
        document.querySelector('.helper-message').classList.add('text-danger');
    }else{
        
        this.classList.add('border', 'border-success');
        this.classList.remove('border', 'border-danger');
        document.querySelector('.helper-message').textContent = ' ' ;
    }
});


