// const menu = document.querySelector('.head__nav__menu')
// const ul = document.querySelector('.head__nav__ul')

// menu.addEventListener('click', () => ul.classList.toggle('mobile'))
//* ---------------------------
// const menu = document.querySelector('.head__nav__menu')

// menu.addEventListener('click', mobileNav)

// function mobileNav() {
// const ul = document.querySelector('.head__nav__ul')
// ul.forEach((b) => {
// if (b.target.className === 'head__nav__menu') {
// ul.classList.toggle('mobile')
// }
// })
// }

let swiper = new Swiper('.mySwiper', {
  slidesPerView: 'auto',
  centeredSlides: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
})
//*---------------------------------------
var menuButton = document.querySelector('.menu-button')
var openMenu = function () {
  swiper2.slidePrev()
}
var swiper2 = new Swiper('.swiper2', {
  slidesPerView: 'auto',
  initialSlide: 1,
  resistanceRatio: 0,
  slideToClickedSlide: true,
  on: {
    slideChangeTransitionStart: function () {
      var slider = this
      if (slider.activeIndex === 0) {
        menuButton.classList.add('cross')
        // required because of slideToClickedSlide
        menuButton.removeEventListener('click', openMenu, true)
      } else {
        menuButton.classList.remove('cross')
      }
    },
    slideChangeTransitionEnd: function () {
      var slider = this
      if (slider.activeIndex === 1) {
        menuButton.addEventListener('click', openMenu, true)
      }
    },
  },
})
