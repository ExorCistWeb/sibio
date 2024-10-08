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