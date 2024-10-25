$(document).ready(function() {
    const container = $('.swiper_about_btn');
    const leftArrow = $('.arrow_left');
    const rightArrow = $('.arrow_right');
    const buttons = $('.swiper_about_btn button');
    const totalButtons = buttons.length;
    let currentIndex = 0;
    let leftValues = [];

    // Функция для обновления значений смещения в зависимости от ширины контейнера
    function updateLeftValues() {
        const buttonWidth = buttons.outerWidth(true); // Ширина кнопки с учетом внешних отступов
        leftValues = Array.from({ length: totalButtons }, (_, index) => (index * buttonWidth));
    }

    // Инициализация значений смещения
    updateLeftValues();

    const scrollFon = $('.a_slide_one'); // Элемент для фона
    const cardSliders = $('.card_slider_content .card_slider'); // Слайдеры карточек

    const backgrounds = [
        'orange_s.png', 'blue_s.png', 'blue_s.png',
        'green_s.png', 'blue_s.png', 'red_s.png',
        'fiol_s.png', 'fiol_s.png'
    ];

    const cardButtonBackgrounds = [
        'plus_btn_one.svg', 'plus_btn_two.svg', 'plus_btn_two.svg',
        'plus_btn_three.svg', 'plus_btn_two.svg', 'plus_btn_four.svg',
        'plus_btn_five.svg', 'plus_btn_five.svg'
    ];

    function updateArrowVisibility() {
        leftArrow.toggle(currentIndex > 0);
        rightArrow.toggle(currentIndex < totalButtons - 1);
    }

    function updateBackground(index) {
        const backgroundSrc = `./img/effects/${backgrounds[index] || 'orange_s.png'}`;
        $('.s_content img').fadeOut(300, function() {
            $(this).attr('src', backgroundSrc).fadeIn(300);
        });
        scrollFon.stop().animate({ left: -leftValues[index] + 'px' }, 300);
    }

    function updateCardButtonBackgrounds(index) {
        $('.about_card_btn').each(function(i) {
            const buttonBackground = (i === index) ?
                cardButtonBackgrounds[i] :
                'plus_btn.svg'; // Статичный фон
            $(this).css('background-image', `url(./img/effects/${buttonBackground})`);
        });
    }

    function activateCardAndButton(index) {
        currentIndex = index;

        container.animate({ left: -currentIndex * buttons.outerWidth(true) }, 300);
        updateArrowVisibility();

        buttons.removeClass('active');
        $('.about_card_btn').removeClass('active').find('span').text('+');
        $('.block_a_card img').css({ opacity: '0', visibility: 'hidden' });
        cardSliders.hide();

        buttons.eq(index).addClass('active');
        const currentCard = $('.block_a_card').eq(index);
        currentCard.find('.about_card_btn').addClass('active').find('span').text('-');
        currentCard.find('img').css({ opacity: '1', visibility: 'visible' });

        cardSliders.eq(index).fadeIn(300);
        updateBackground(index);
        updateCardButtonBackgrounds(index);
    }

    buttons.on('click', function() {
        const index = $(this).data('index');
        activateCardAndButton(index);
    });

    $('.about_card_btn').on('click', function() {
        const index = $(this).parent().data('index');
        activateCardAndButton(index);
    });

    activateCardAndButton(0);

    rightArrow.on('click', function() {
        if (currentIndex < totalButtons - 1) {
            currentIndex++;
            activateCardAndButton(currentIndex);
        }
    });

    leftArrow.on('click', function() {
        if (currentIndex > 0) {
            currentIndex--;
            activateCardAndButton(currentIndex);
        }
    });

    // Обновляем значения смещения при изменении размера окна
    $(window).on('resize', updateLeftValues);
});