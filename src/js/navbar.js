const burgerBtn = document.querySelector('#cmp_navbar__burger_btn')
const menuBar = document.querySelector('#cmp_navbar__bar')

burgerBtn.addEventListener('click',(e)=>{
    burgerBtn.classList.toggle('contacts__burger_active');
    menuBar.classList.toggle('menu_active');
})