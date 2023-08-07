const ACTIVE_SLIDE_CLASS = "slider__item_active"

const sliderItemsElement = document.querySelector('.slider__items');

const arrowPrev = document.querySelector('.slider__arrow_prev');
const arrowNext = document.querySelector('.slider__arrow_next');


let activeSlideIndex = 0
function onArrowPrevClick() {
  activeSlideIndex -= 1

  const LAST_SLIDER_INDEX = sliderItemsElement.children.length - 1
  if (activeSlideIndex < 0) {
    activeSlideIndex = LAST_SLIDER_INDEX
  }

  updateActiveSlide()
}
function onArrowNextClick() {
  activeSlideIndex += 1

  const LAST_SLIDER_INDEX = sliderItemsElement.children.length - 1
  if (activeSlideIndex > LAST_SLIDER_INDEX) {
    activeSlideIndex = 0
  }

  updateActiveSlide()
}


function updateActiveSlide() {
  const slides = [...sliderItemsElement.children]
  slides.forEach(slide => {
    slide.classList.remove(ACTIVE_SLIDE_CLASS)
  })
  
  
  const activeSlide = slides[activeSlideIndex]
  if (activeSlide == null) return

  activeSlide.classList.add(ACTIVE_SLIDE_CLASS)
}


if (arrowPrev != null) {
  arrowPrev.onclick = onArrowPrevClick
}
if (arrowNext != null) {
  arrowNext.onclick = onArrowNextClick
}
