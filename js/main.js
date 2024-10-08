$(document).ready(function() {
    // Клик по кнопке
    $('.left_contact button').click(function() {
        // Убираем active класс у всех кнопок
        $('.left_contact button').removeClass('active');
        // Добавляем active к текущей кнопке
        $(this).addClass('active');

        // Анимация смены текста и формы
        var newTitle = $(this).data('title');
        var newText = $(this).data('text');
        var formId = $(this).data('form');

        // Скрываем текущий контент с анимацией
        $('.form_title, .form_text').fadeOut(200, function() {
            // Меняем заголовок и текст
            $('.form_title').text(newTitle);
            $('.form_text').text(newText);
            // Показываем новый контент
            $('.form_title, .form_text').fadeIn(200);
        });

        // Скрываем все формы и показываем нужную
        $('.contact_form form').fadeOut(200);
        setTimeout(function() {
            $('#' + formId).fadeIn(200);
        }, 200);
    });
});
document.querySelectorAll('.input_box input').forEach(input => {
    input.addEventListener('focus', () => {
        input.classList.add('focused');
    });

    input.addEventListener('blur', () => {
        if (!input.value) {
            input.classList.remove('focused');
        }
    });
});
$(document).ready(function() {
    // По клику на любую кнопку с классом .btn_catalog
    $('.btn_catalog').on('click', function() {
        var menu = $('.menu_catalog');

        // Проверяем, открыто ли меню
        if (menu.is(':visible')) {
            // Анимация закрытия: перемещение вправо и уменьшение высоты
            menu.animate({
                opacity: 0,
                right: '-100px',
                top: '-100px',
                height: '0px',
                padding: '0px'
            }, 600, function() {
                menu.hide(); // Скрываем меню после анимации
            });
        } else {
            // Сбросим стиль и отобразим перед открытием
            menu.css({
                display: 'flex', // Отображаем меню перед анимацией
                opacity: 0,
                right: '0',
                top: '40px',
                height: '0px',
                padding: '0px'
            });

            // Анимация открытия: возвращаем к исходным размерам и позиции
            menu.animate({
                opacity: 1,
                right: '0px',
                top: '40px',
                height: '662px',
                padding: '70px 70px 68px 73px'
            }, 600);
        }
    });
});

$(document).ready(function() {
    // Открытие/закрытие меню
    $('.mobile_menu_toggle').click(function() {
        $('.mobile_menu').fadeToggle(300); // Плавное открытие/закрытие меню

        // Переключаем класс, чтобы блокировать прокрутку у body
        $('body').toggleClass('no_scroll');
    });

    // Аккордеоны для разделов меню
    $('.accordion').click(function() {
        $(this).toggleClass('active');
        $(this).next('.panel').slideToggle(300); // Плавное открытие/закрытие аккордеона
    });
});