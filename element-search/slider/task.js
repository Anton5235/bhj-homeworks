const sliderItemsElements = document.querySelectorAll('.slider__item');
const activeSlide = Array.from(sliderItemsElements).findIndex(slide => slide.classList.contains('slider__item_active'));

const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');


function init(n) {
  let position = (n + sliderItemsElements.length) % sliderItemsElements.length;
  sliderItemsElements.forEach(item => {
    item.classList.remove('slider__item_active');
  });
  sliderItemsElements[position].classList.toggle("slider__item_active");
}

init(activeSlide);

document.querySelector('.slider__arrow_prev').addEventListener('click', () => {
  let activeSlide = Array.from(sliderItemsElements).findIndex(slide => slide.classList.contains('slider__item_active'));
  init(activeSlide - 1);
});

document.querySelector('.slider__arrow_next').addEventListener('click', () => {
  let activeSlide = Array.from(sliderItemsElements).findIndex(slide => slide.classList.contains('slider__item_active'));
  init(activeSlide + 1);
});
