const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const imageContainer = document.querySelector('.carousel__container')
const images = document.querySelectorAll('.carousel__container img')
const dots = document.querySelectorAll('.dot')

// global index for image amd dots positions
let index = localStorage.getItem('id') ? localStorage.getItem('id') : 0

// function to change the X-pos of the images
const setImageAndDot = (i) => {
  // remove 'data-active' attribute from all dots
  dots.forEach(dot => {
    dot.removeAttribute('data-active')
  })
  // add transform styles to all images
  images.forEach(img => {
    img.style.transform = `translateX(${i * -100}%)`
    dots[i].setAttribute('data-active', '')
  })
  addToLocalStorage()
}

const prevBtnAction = () => {
  index <= 0 ? index = images.length - 1 : index--
  setImageAndDot(index)
}

const nextBtnAction = () => {
  index >= images.length - 1 ? index = 0 : index++
  setImageAndDot(index)
}

//  EVENT LISTENERS
prevBtn.addEventListener('click', prevBtnAction)
nextBtn.addEventListener('click', nextBtnAction)

dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i
    setImageAndDot(i)
  })
})

window.addEventListener('DOMContentLoaded', () => {
  setImageAndDot(index)
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
  localStorage.setItem('id', index)
}