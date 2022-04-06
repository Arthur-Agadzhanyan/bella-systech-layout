//BENEFITS
const oneProductBigSlider = new Swiper('#one_product_page-big_slider',{
    slidesPerView: 1,
    loop: true,
    autoHeight: true,
    slidesPerGroup: true,
    speed: 1000
})

const oneProductSmallSlider = new Swiper('#one_product_page-small_slider',{
    slidesPerView: 3,
    loop: true,
    slideToClickedSlide: true,
    slidesPerGroup: true,
    speed: 1000,
    direction: "vertical",

    navigation:{
        nextEl: ".small__slider_next",
        prevEl: ".small__slider_prev",
    },
})

oneProductSmallSlider.on('slideChangeTransitionEnd', function() {
    let index_currentSlide = oneProductSmallSlider.realIndex + 1;
    let currentSlide = oneProductSmallSlider.slides[index_currentSlide]
    oneProductBigSlider.slideTo(index_currentSlide, 1000, false);
});
  
oneProductBigSlider.on('slideChangeTransitionEnd', function() {
    let index_currentSlide = oneProductBigSlider.realIndex + 3;
    let currentSlide = oneProductBigSlider.slides[index_currentSlide]
    oneProductSmallSlider.slideTo(index_currentSlide, 1000, false);
});

//EFFECT

const oneProductEffectSlider = new Swiper('#one_page-effect_slider',{
    slidesPerView: 2,
    spaceBetween: 40,
    slidesPerGroup: 2,
    speed: 1200,
    loop: true,
    navigation:{
        nextEl: "#one_page-effect_slider-next",
        prevEl: "#one_page-effect_slider-prev",
    },
})

//Other devices

const oneProductOtherDevicesMbSlider = new Swiper('#one-product-other_devices_mb_slider', {
    slidesPerView: 1,
    loop: true,
    loopedSlides: 1,
    autoHeight: true,
    speed: 1300,
    pagination: {
        clickable: true,
        type: 'bullets',
        el: '#main_page-news_slider_pagination',
        bulletElement: 'div',
        bulletClass: 'pagination__item',
        bulletActiveClass: 'pagination__item_active',
        renderBullet: function (index, className) {
            return '<div class="' + className + '">*</div>';
        }
    },
    navigation: {
        prevEl: '#other_devices_slider_arrow_left',
        nextEl: '#other_devices_slider_arrow_right'
    }
})

const oneProductAutoMbSlider = new Swiper('#one-product-auto_mb_slider', {
    slidesPerView: 1,
    loop: true,
    loopedSlides: 1,
    autoHeight: true,
    speed: 1300,
    autoplay: {
        delay: 2500
    },
    pagination: {
        clickable: true,
        type: 'bullets',
        el: '#main_page-news_slider_pagination',
        bulletElement: 'div',
        bulletClass: 'pagination__item',
        bulletActiveClass: 'pagination__item_active',
        renderBullet: function (index, className) {
            return '<div class="' + className + '">*</div>';
        }
    },
    navigation: {
        prevEl: '#one_product-auto_slider_arrow_left',
        nextEl: '#one_product-auto_slider_arrow_right'
    }
})

const oneProductNewsMbSlider = new Swiper('#one-product-news_mb_slider', {
    slidesPerView: 1,
    loop: true,
    loopedSlides: 1,
    autoHeight: true,
    speed: 1300,
    autoplay: {
        delay: 2500
    },
    pagination: {
        clickable: true,
        type: 'bullets',
        el: '#main_page-news_slider_pagination',
        bulletElement: 'div',
        bulletClass: 'pagination__item',
        bulletActiveClass: 'pagination__item_active',
        renderBullet: function (index, className) {
            return '<div class="' + className + '">*</div>';
        }
    },
    navigation: {
        prevEl: '#one_product-news_slider_arrow_left',
        nextEl: '#one_product-news_slider_arrow_right'
    }
})