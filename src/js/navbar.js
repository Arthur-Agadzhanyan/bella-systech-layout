const burgerBtn = document.querySelector('#cmp_navbar__burger_btn')
const menuBar = document.querySelector('#cmp_navbar__bar')

burgerBtn.addEventListener('click',(e)=>{
    burgerBtn.classList.toggle('contacts__burger_active');
    menuBar.classList.toggle('menu_active');

    if(menuBar.classList.contains('bot_0')){
        menuBar.classList.remove("bot_0")
    }else{
        setTimeout(()=>{
            menuBar.classList.add("bot_0")
        },400)
    } 

    document.body.classList.toggle('overf_hidden')
})