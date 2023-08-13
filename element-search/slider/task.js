const sliderItemsElement = document.querySelector('.slider__items');
const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');
const slides = Array.from(sliderItemsElement.children);
const lastSlider= slides.length - 1;

init();

<<<<<<< HEAD
function init () {
let activeSlideIndex = 0
function onArrowPrevClick() {
  activeSlideIndex--;
  if (activeSlideIndex < 0) {
    activeSlideIndex = lastSlider
=======
let counter = 0;
function onArrowPrevClick() {
    counter -= 1;
  const lastSlider= sliderItemsElement.children.length - 1
  if (counter < 0) {
    counter = lastSlider
>>>>>>> 61525d82adc61c403e55bbf5ee3ed34f625815b7
  }
  updateActiveSlide()
}

function onArrowNextClick() {
<<<<<<< HEAD
  activeSlideIndex += 1
  if (activeSlideIndex > lastSlider) {
    activeSlideIndex = 0
=======
    counter += 1;
  const lastSlider = sliderItemsElement.children.length - 1
  if (counter > lastSlider) {
    counter = 0
>>>>>>> 61525d82adc61c403e55bbf5ee3ed34f625815b7
  }
  updateActiveSlide()
}


function updateActiveSlide() {
  slides.forEach(slide => {
    slide.classList.remove("slider__item_active")
  })
  const activeSlide = slides[counter];
  activeSlide.classList.add("slider__item_active")
}

 arrowPrev.onclick = onArrowPrevClick;
 arrowNext.onclick = onArrowNextClick;
}
