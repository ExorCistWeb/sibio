$(document).ready(function() {
    const container = $('.swiper_about_btn');
    const leftArrow = $('.arrow_left');
    const rightArrow = $('.arrow_right');
    const buttonWidth = $('.swiper_about_btn button').outerWidth(true); // Ширина кнопки с учетом внешних отступов
    const totalButtons = $('.swiper_about_btn button').length; // Общее количество кнопок
    let currentIndex = 0;

    // Массив значений смещения для каждого слайда фона
    const leftValues = [0, 350, 750, 950, 1150, 1450, 1530, 1550];

    // Слайдер карточек
    const scrollFon = $('.a_slide_one'); // Элемент для фона
    const cardSliders = $('.card_slider_content .card_slider'); // Слайдеры карточек

    // Фоны для каждого индекса
    const backgrounds = {
        0: 'orange_s.png',
        1: 'blue_s.png',
        2: 'blue_s.png',
        3: 'green_s.png',
        4: 'fiol_s.png'
    };

    // Функция для обновления видимости стрелок
    function updateArrowVisibility() {
        leftArrow.toggle(currentIndex > 0);
        rightArrow.toggle(currentIndex < totalButtons - 1);
    }

    // Функция для обновления фона с анимацией
    function updateBackground(index) {
        const backgroundSrc = backgrounds[index] || 'orange_s.png'; // Используем дефолтный фон, если не задано
        $('.s_content img').fadeOut(300, function() {
            $(this).attr('src', `./img/effects/${backgroundSrc}`).fadeIn(300); // Обновляем источник изображения
        });

        // Прокрутка фона с учетом значений смещения
        const leftValue = leftValues[index] || 0; // Получаем смещение для текущего индекса
        scrollFon.stop().animate({ left: -leftValue + 'px' }, 300); // Анимация прокрутки фона
    }

    // Общая функция для активации соответствующей карточки и кнопки
    function activateCardAndButton(index) {
        currentIndex = index; // Обновляем текущий индекс

        // Перемещаем контейнер кнопок слайдера
        container.animate({ left: -currentIndex * buttonWidth }, 300);
        updateArrowVisibility();

        // Сброс активных состояний кнопок и карточек
        $('.swiper_about_btn button').removeClass('active');
        $('.about_card_btn').removeClass('active').find('span').text('+');
        $('.block_a_card img').css('opacity', '0').css('visibility', 'hidden'); // Скрываем все изображения карточек
        cardSliders.hide(); // Скрыть все карточки

        // Активируем текущую кнопку слайдера и соответствующую карточку
        $('.swiper_about_btn button').eq(index).addClass('active');
        $('.block_a_card').eq(index).find('.about_card_btn').addClass('active').find('span').text('-');
        $('.block_a_card').eq(index).find('img').css('opacity', '1').css('visibility', 'visible'); // Отображаем соответствующую карточку

        cardSliders.eq(index).fadeIn(300); // Плавное отображение нужного слайдера карточки

        // Обновляем фон
        updateBackground(index);
    }

    // Логика для клика по кнопкам слайдера
    $('.swiper_about_btn button').on('click', function() {
        const index = $(this).data('index');
        activateCardAndButton(index); // Активируем соответствующую карточку и фон
    });

    // Логика для клика по карточкам
    $('.about_card_btn').on('click', function() {
        const index = $(this).parent().data('index'); // Определяем индекс карточки
        activateCardAndButton(index);
    });

    // Инициализация: активируем первую карточку при загрузке страницы
    activateCardAndButton(0);

    // Логика для клика по стрелке вправо
    rightArrow.on('click', function() {
        if (currentIndex < totalButtons - 1) {
            currentIndex++;
            activateCardAndButton(currentIndex);
        }
    });

    // Логика для клика по стрелке влево
    leftArrow.on('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            activateCardAndButton(currentIndex);
        }
    });
});

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