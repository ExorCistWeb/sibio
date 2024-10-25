var swiper = new Swiper(".mySwiper", {

    centeredSlides: true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});

var swiper = new Swiper(".productSwiper", {
    slidesPerView: 5,
    spaceBetween: 22,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        // Брейкпоинт для экранов до 440 пикселей
        0: {
            slidesPerView: 'auto', // Количество слайдов
            spaceBetween: 20, // Промежуток между слайдами
        },
        // Брейкпоинт для экранов до 768 пикселей
        768: {
            slidesPerView: 5,
            spaceBetween: 22,
        },
    },
});

var swiper = new Swiper(".detalInfoSwiper", {

    centeredSlides: true,
    autoplay: {
        delay: 8000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },

});