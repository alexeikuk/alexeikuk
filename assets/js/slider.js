new Swiper('.b-3-slider', {
    effect: 'coverflow',
    centeredSlides: true,
    slidesPerView: 'auto',
    speed: 600,
    grabCursor: true,
    slideToClickedSlide: true,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    pagination: { el: '.swiper-pagination', clickable: true },
    coverflowEffect: {
        rotate: 26,
        stretch: 26,
        depth: 180,
        modifier: 1,
        scale: 0.90,
        slideShadows: false
    },
    breakpoints: {
        320: {
            coverflowEffect: {
                rotate: 18,
                stretch: 12,
                depth: 100,
                scale: 0.88,
                slideShadows: false
            }
        },
        768: {
            coverflowEffect: {
                rotate: 26,
                stretch: 26,
                depth: 180,
                scale: 0.90,
                slideShadows: false
            }
        }
    }
});
