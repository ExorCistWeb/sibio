const priceGap = 5000;

// Функция для обработки слайдера цены
const priceInputMin = document.querySelector(".input-min-price");
const priceInputMax = document.querySelector(".input-max-price");
const rangeInputMinPrice = document.querySelector(".range-min-price");
const rangeInputMaxPrice = document.querySelector(".range-max-price");
const progressPrice = document.querySelector(".progress-price");

rangeInputMinPrice.addEventListener("input", handlePriceRange);
rangeInputMaxPrice.addEventListener("input", handlePriceRange);

function handlePriceRange(e) {
    let minVal = parseInt(rangeInputMinPrice.value),
        maxVal = parseInt(rangeInputMaxPrice.value);

    if ((maxVal - minVal) < priceGap) {
        if (e.target === rangeInputMinPrice) {
            rangeInputMinPrice.value = maxVal - priceGap;
        } else {
            rangeInputMaxPrice.value = minVal + priceGap;
        }
    } else {
        priceInputMin.value = minVal;
        priceInputMax.value = maxVal;
        progressPrice.style.left = ((minVal / rangeInputMinPrice.max) * 100) + "%";
        progressPrice.style.right = 100 - (maxVal / rangeInputMaxPrice.max) * 100 + "%";
    }
}

// Функция для обработки слайдера высоты
const rangeInputMinHeight = document.querySelector(".range-min-height");
const rangeInputMaxHeight = document.querySelector(".range-max-height");
const progressHeight = document.querySelector(".progress-height");

rangeInputMinHeight.addEventListener("input", handleHeightRange);
rangeInputMaxHeight.addEventListener("input", handleHeightRange);

function handleHeightRange(e) {
    let minVal = parseInt(rangeInputMinHeight.value),
        maxVal = parseInt(rangeInputMaxHeight.value);

    if ((maxVal - minVal) < 10) {
        if (e.target === rangeInputMinHeight) {
            rangeInputMinHeight.value = maxVal - 10;
        } else {
            rangeInputMaxHeight.value = minVal + 10;
        }
    } else {
        progressHeight.style.left = ((minVal / rangeInputMinHeight.max) * 100) + "%";
        progressHeight.style.right = 100 - (maxVal / rangeInputMaxHeight.max) * 100 + "%";
    }
}