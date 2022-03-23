const mainPageTextSlider = new Swiper('#main_page-intro_text_slider',{
    slidesPerView: 1,
    loop: true,
    loopedSlides: 1,
    centeredSlides: true,
    speed: 1300,
    pagination:{
        clickable: true,
        type: 'bullets',
        el: '#main_page-intro_slider_pagination',
        bulletElement: 'div',
        bulletClass: 'pagination__item',
        bulletActiveClass: 'pagination__item_active',
        renderBullet: function (index, className) {
            return '<div class="' + className + '">*</div>';
        }
    }
})

const mainPageImageSlider = new Swiper('#main_page-intro_image_slider',{
    slidesPerView: 1,
    loop: true,
    loopedSlides: 1,
    centeredSlides: true,
    speed: 1300,
    navigation:{
        prevEl: '#main_page-intro_slider-arrow_prev',
        nextEl: '#main_page-intro_slider-arrow_next'
    }
})

mainPageTextSlider.controller.control = mainPageImageSlider
mainPageImageSlider.controller.control = mainPageTextSlider