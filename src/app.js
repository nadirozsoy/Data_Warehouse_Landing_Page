const menu = document.querySelector('.head__nav__menu')
const ul = document.querySelector('.head__nav__ul')

menu.addEventListener('click', () => {
  ul.classList.toggle('mobile')
})
