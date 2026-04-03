$(function () {
    lucide.createIcons();


    const swiper = new Swiper('.main_visual_slider', {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
    });


})