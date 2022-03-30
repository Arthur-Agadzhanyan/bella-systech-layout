const productsPageFiltersBtns = document.querySelectorAll('.products_page-mb_filters_btn')
const productsPageFiltersBar = document.getElementById('products_page-mb_filters_bar')

productsPageFiltersBtns.forEach(btn=>{
    btn.addEventListener('click',()=>{
        productsPageFiltersBar.classList.toggle('mb_filters_menu-open')
        document.body.classList.toggle('overf_hidden')
    })
})