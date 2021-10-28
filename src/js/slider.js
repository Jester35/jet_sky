/* Индекс слайда по умолчанию */
let slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
document.querySelector('.next').addEventListener('click', plusSlide)
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
document.querySelector('.prev').addEventListener('click', minusSlide)
function minusSlide() {
    showSlides(slideIndex -= 1);
}
[...document.querySelectorAll('.slider-dots__item')].map(function (item, i) {
    item.addEventListener('click', function () {
        currentSlide(i + 1)
    })
})

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция сладера */
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("banner-section__slider-item");
    let dots = document.getElementsByClassName("slider-dots__item");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}