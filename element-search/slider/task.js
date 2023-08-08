const sliderItemsElement = document.querySelector('.slider__items');

const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');


let counter = 0;
function onArrowPrevClick() {
    counter -= 1;
  const lastSlider= sliderItemsElement.children.length - 1
  if (counter < 0) {
    counter = lastSlider
  }
  updateActiveSlide()
}

function onArrowNextClick() {
    counter += 1;
  const lastSlider = sliderItemsElement.children.length - 1
  if (counter > lastSlider) {
    counter = 0
  }
  updateActiveSlide()
}


function updateActiveSlide() {
  const slides = Array.from(sliderItemsElement.children);
  slides.forEach(slide => {
    slide.classList.remove("slider__item_active")
  })
  const activeSlide = slides[counter];
  activeSlide.classList.add("slider__item_active")
}

 arrowPrev.onclick = onArrowPrevClick;
 arrowNext.onclick = onArrowNextClick;

