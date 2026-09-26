new Swiper('.b-3-slider', {
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 'auto',
    loop: true,
    slideToClickedSlide: true,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    pagination: { el: '.swiper-pagination', clickable: true },
    breakpoints: {
        320: { coverflowEffect: { rotate: 18, stretch: 12, depth: 90, scale: 0.88, slideShadows: false } },
        768: { coverflowEffect: { rotate: 24, stretch: 30, depth: 160, scale: 0.90, slideShadows: false } }
    }
});
