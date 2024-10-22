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
    var menu = $('.menu_catalog');
    var catalogWrapper = $('.catalog_wrapper');

    // Функция для открытия меню
    function openMenu() {
        menu.css({
            display: 'flex',
            opacity: 0,
            right: '0',
            top: '40px',
            height: '0px',
            padding: '0px'
        });

        menu.animate({
            opacity: 1,
            right: '0px',
            top: '40px',
            height: '662px',
            padding: '70px 70px 68px 73px'
        }, 600);
    }

    // Функция для закрытия меню
    function closeMenu() {
        menu.animate({
            opacity: 0,
            right: '-100px',
            top: '-100px',
            height: '0px',
            padding: '0px'
        }, 600, function() {
            menu.hide();
        });
    }

    // Открытие меню при наведении на кнопку
    $('.btn_catalog').on('mouseenter', function() {
        openMenu();
    });

    // Закрытие меню при уходе мыши
    catalogWrapper.on('mouseleave', function() {
        closeMenu();
    });

    // Оставляем меню открытым, если мышь над ним
    menu.on('mouseenter', function() {
        $(this).stop(true, true); // Останавливаем текущую анимацию
        $(this).css({ opacity: 1 }); // Устанавливаем видимость на 1
    });

    menu.on('mouseleave', function() {
        closeMenu();
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

// Поиск кол-во
function changeQuantity(amount) {
    let input = document.getElementById("quantity-input");
    let currentValue = parseInt(input.value);

    if (currentValue + amount >= 1) { // Минимум 1
        input.value = currentValue + amount;
    }
}

// РАСКРЫТИЕ ИНФОРМАЦИИ ПРОДУКТА
document.addEventListener('DOMContentLoaded', function() {
    // Находим все кнопки "more_info"
    const buttons = document.querySelectorAll('.more_info');

    // Обрабатываем нажатие каждой кнопки
    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const parent = this.closest('.product_info_description'); // Находим родительский блок
            const infoBlock = parent.querySelector('.pr_in_desc_info'); // Находим блок с информацией
            const img = this.querySelector('img'); // Изображение в кнопке
            const spanText = this.querySelector('span'); // Текст кнопки

            // Проверяем, открыт ли блок, через наличие класса "open"
            if (infoBlock.classList.contains('open')) {
                // Если открыт — закрываем
                infoBlock.style.maxHeight = '90px';
                img.style.transform = 'rotate(0deg)';
                spanText.textContent = 'больше';
                infoBlock.classList.remove('open');
            } else {
                // Если закрыт — открываем
                infoBlock.style.maxHeight = infoBlock.scrollHeight + 'px'; // Устанавливаем max-height на текущую высоту контента
                img.style.transform = 'rotate(180deg)';
                spanText.textContent = 'Скрыть';
                infoBlock.classList.add('open');
            }
        });
    });
});

// АККОРДИОН


document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion_item');

    accordionItems.forEach(item => {
        const header = item.querySelector('.accordion_header');
        const toggleButton = item.querySelector('.accordion_toggle');
        const content = item.querySelector('.accordion_content');

        header.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Закрываем все остальные аккордеоны
            accordionItems.forEach(otherItem => {
                otherItem.classList.remove('active');
                otherItem.querySelector('.accordion_content').style.maxHeight = null;
                otherItem.querySelector('.accordion_toggle').textContent = '+'; // Возвращаем "+" при закрытии
            });

            if (!isActive) {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px'; // Открываем контент
                toggleButton.textContent = '-'; // Меняем текст кнопки на "-"
            } else {
                item.classList.remove('active');
                content.style.maxHeight = null; // Скрываем контент
                toggleButton.textContent = '+'; // Возвращаем "+"
            }
        });
    });
});

// Галерея
document.addEventListener('DOMContentLoaded', function() {
    const smallImages = document.querySelectorAll('.gallery_flex_img_cont img');
    const galleryContainer = document.querySelector('.galleru_img');

    // Если есть изображения в галерее, берем первое изображение и добавляем его в блок .galleru_img
    if (smallImages.length > 0) {
        const firstImageSrc = smallImages[0].src;

        // Создаем новый элемент <img> и добавляем его в контейнер .galleru_img
        const largeImage = document.createElement('img');
        largeImage.src = firstImageSrc;
        largeImage.alt = "Selected Image";
        galleryContainer.appendChild(largeImage);

        // Добавляем функционал для изменения изображения по клику на маленькие изображения
        smallImages.forEach(img => {
            img.addEventListener('click', function() {
                largeImage.src = this.src;
            });
        });
    }
});

document.querySelectorAll('.form-group input').forEach(input => {
    input.addEventListener('focus', () => {
        input.nextElementSibling.classList.add('active');
    });

    input.addEventListener('blur', () => {
        if (input.value === '') {
            input.nextElementSibling.classList.remove('active');
        }
    });
});