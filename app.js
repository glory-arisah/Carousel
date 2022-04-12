const prevBtn = document.querySelector('.prev')
const nextBtn = document.querySelector('.next')
const imageContainer = document.querySelector('.carousel__container')
const images = document.querySelectorAll('.carousel__container img')

// global index for image positions
let index = 0

// function to change the X-pos of the images
const setImage = (i) => {
  images.forEach(img => {
    img.style.transform = `translateX(${i * -100}%)`
  })
  // console.log(i)
}

const prevBtnAction = () => {
  if (index === 0) {
    index = images.length - 1
  } else {
    index--
  }
  setImage(index)
}

const nextBtnAction = () => {
  if (index === images.length - 1) {
    index = 0
  } else {
    index++
  }

  
  setImage(index)
}

//  EVENT LISTENERS FOR NAVIGATION BUTTONS
prevBtn.addEventListener('click', prevBtnAction)
nextBtn.addEventListener('click', nextBtnAction)