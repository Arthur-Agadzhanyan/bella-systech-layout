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
