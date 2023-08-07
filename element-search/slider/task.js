const sliderItemsElement = document.querySelector('.slider__items');

const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');


let activeSlideIndex = 0
function onArrowPrevClick() {
  activeSlideIndex -= 1

  const lastSlider= sliderItemsElement.children.length - 1
  if (activeSlideIndex < 0) {
    activeSlideIndex = lastSlider
  }

  updateActiveSlide()
}
function onArrowNextClick() {
  activeSlideIndex += 1

  const lastSlider = sliderItemsElement.children.length - 1
  if (activeSlideIndex > lastSlider) {
    activeSlideIndex = 0
  }

  updateActiveSlide()
}


function updateActiveSlide() {
  const slides = Array.from(sliderItemsElement.children);
  slides.forEach(slide => {
    slide.classList.remove("slider__item_active")
  })
  
  
  const activeSlide = slides[activeSlideIndex]
  if (activeSlide == null) return

  activeSlide.classList.add("slider__item_active")
}

 arrowPrev.onclick = onArrowPrevClick;
 arrowNext.onclick = onArrowNextClick;

