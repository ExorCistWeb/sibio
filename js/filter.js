const priceGap = 5000;
const heightGap = 10;
const widthGap = 10;

// Обработка для слайдера цены
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

// Обработка для слайдера высоты
const rangeInputMinHeight = document.querySelector(".range-min-height");
const rangeInputMaxHeight = document.querySelector(".range-max-height");
const progressHeight = document.querySelector(".progress-height");

rangeInputMinHeight.addEventListener("input", handleHeightRange);
rangeInputMaxHeight.addEventListener("input", handleHeightRange);

function handleHeightRange(e) {
    let minVal = parseInt(rangeInputMinHeight.value),
        maxVal = parseInt(rangeInputMaxHeight.value);

    if ((maxVal - minVal) < heightGap) {
        if (e.target === rangeInputMinHeight) {
            rangeInputMinHeight.value = maxVal - heightGap;
        } else {
            rangeInputMaxHeight.value = minVal + heightGap;
        }
    } else {
        progressHeight.style.left = ((minVal / rangeInputMinHeight.max) * 100) + "%";
        progressHeight.style.right = 100 - (maxVal / rangeInputMaxHeight.max) * 100 + "%";
    }
}

// Обработка для слайдера ширины
const rangeInputMinWidth = document.querySelector(".range-min-width");
const rangeInputMaxWidth = document.querySelector(".range-max-width");
const progressWidth = document.querySelector(".progress-width");

rangeInputMinWidth.addEventListener("input", handleWidthRange);
rangeInputMaxWidth.addEventListener("input", handleWidthRange);

function handleWidthRange(e) {
    let minVal = parseInt(rangeInputMinWidth.value),
        maxVal = parseInt(rangeInputMaxWidth.value);

    if ((maxVal - minVal) < widthGap) {
        if (e.target === rangeInputMinWidth) {
            rangeInputMinWidth.value = maxVal - widthGap;
        } else {
            rangeInputMaxWidth.value = minVal + widthGap;
        }
    } else {
        progressWidth.style.left = ((minVal / rangeInputMinWidth.max) * 100) + "%";
        progressWidth.style.right = 100 - (maxVal / rangeInputMaxWidth.max) * 100 + "%";
    }
}