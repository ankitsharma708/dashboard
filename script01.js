
const sideMenu=document.querySelector('aside');
const menuBtn=document.querySelector('#menu_bar');
const closeBtn=document.querySelector('#close_btn');
const themetoggler=document.querySelector('.theme-toggler')

menuBtn.addEventListener('click',()=>{
    sideMenu.style.display="block";
})

closeBtn.addEventListener('click',()=>{
    sideMenu.style.display="none";
})

themetoggler.addEventListener('click',()=>{
    document.body.classList.toggle('dark-theme-variables')

    themetoggler.querySelector('span:nth-child(1)').classList.toggle('active')
    themetoggler.querySelector('span:nth-child(2)').classList.toggle('active')
})