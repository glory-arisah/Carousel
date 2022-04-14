const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const imageContainer = document.querySelector('.carousel__container')
const dotContainer = document.querySelector('.dot__wrapper')
const images = document.querySelectorAll('.carousel__container img')

// GLOBAL INDEX FOR IMAGES AND DOTS POSITIONS
let slideIndex = localStorage.getItem('id') ? localStorage.getItem('id') : 0

// CREATES NAVIGATION DOTS
images.forEach(() => {
  let dot = document.createElement('p')
  dot.classList.add('dot')
  dotContainer.appendChild(dot)
})

// CHANGE X-POSITIONS OF THE IMAGES AND SET DOT-ACTIVE ATTRIBUTE
const setImageAndDot = index => {
  // get the dot with data-active attribute
  const activeDot = dotContainer.querySelector('[data-active]')
  // update X-position of images and data-active attr for dot element
  images.forEach(img => {
    img.style.transform = `translateX(${index * -100}%)`
    dotContainer.children[slideIndex].dataset.active = true
    activeDot && delete activeDot.dataset.active
  })
  addToLocalStorage()
}

// NAVIGATION BUTTONS FUNCTIONS
const prevBtnAction = () => {
  slideIndex <= 0 ? slideIndex = images.length - 1 : slideIndex--
  setImageAndDot(slideIndex)
}

const nextBtnAction = () => {
  slideIndex >= images.length - 1 ? slideIndex = 0 : slideIndex++
  setImageAndDot(slideIndex)
}

// LOCALSTORAGE
function addToLocalStorage() {
  localStorage.setItem('id', slideIndex)
}

//  EVENT LISTENERS
prevBtn.addEventListener('click', prevBtnAction)
nextBtn.addEventListener('click', nextBtnAction)

dotContainer.querySelectorAll('*').forEach((dot, i) => {
  dot.addEventListener('click', () => {
    slideIndex = i
    setImageAndDot(i)
  })
})

window.addEventListener('DOMContentLoaded', () => {
  setImageAndDot(slideIndex)
})

// WINDOW EVENT LISTENER FOR KEYBOARD ARROW KEYS
window.addEventListener('keydown', (e) => {
  if (e.keyCode === 37) { prevBtnAction() }
  if (e.keyCode === 39) { nextBtnAction() }
})

// LOADER
window.addEventListener('load', () => {
  document.getElementById("loader").style.visibility = 'hidden';
  document.getElementById("main").style.visibility = 'visible';
})