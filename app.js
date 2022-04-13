const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const imageContainer = document.querySelector('.carousel__container')
const dotContainer = document.querySelector('.dot__wrapper')
const images = document.querySelectorAll('.carousel__container img')

// global index for image and dots positions
let slideIndex = localStorage.getItem('id') ? localStorage.getItem('id') : 0

// creates navigation dots
images.forEach(() => {
  let dot = document.createElement('p')
  dot.classList.add('dot')
  dotContainer.appendChild(dot)
})
const dots = dotContainer.querySelectorAll('.dot')
// function to change the X-pos of the images
const setImageAndDot = index => {
  // remove 'data-active' attribute from all dots
  dots.forEach(dot => {
    dot.removeAttribute('data-active')
  })
  // change X-pos of images and data-active attr for dot element
  images.forEach(img => {
    img.style.transform = `translateX(${index * -100}%)`
    dots[index].setAttribute('data-active', '')
  })
  addToLocalStorage()
}

// navigation buttons
const prevBtnAction = () => {
  slideIndex <= 0 ? slideIndex = images.length - 1 : slideIndex--
  setImageAndDot(slideIndex)
}

const nextBtnAction = () => {
  slideIndex >= images.length - 1 ? slideIndex = 0 : slideIndex++
  setImageAndDot(slideIndex)
}

//  EVENT LISTENERS
prevBtn.addEventListener('click', prevBtnAction)
nextBtn.addEventListener('click', nextBtnAction)

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    slideIndex = i
    setImageAndDot(i)
  })
})

window.addEventListener('DOMContentLoaded', () => {
  setImageAndDot(slideIndex)
})
window.addEventListener('keydown', (e) => {
  if (e.keyCode === 37) {
    prevBtnAction()
    prevBtn.setAttribute('data-clicked', '')
  } else if (e.keyCode === 39) {
    nextBtnAction()
  }
})

// LOCALSTORAGE FUNCTIONALITY
function addToLocalStorage() {
  localStorage.setItem('id', slideIndex)
}

// LOADER
window.addEventListener('load', () => {
  if (document.all) {
    document.all['loader'].style.visibility = 'hidden'
    document.all['main'].style.visibility = 'visible'
  } else {
    document.getElementById("loader").style.visibility = 'hidden';
    document.getElementById("main").style.visibility = 'visible';
  }
})