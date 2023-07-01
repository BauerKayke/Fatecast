
const menuBurguer = document.querySelector('.menuBurguer');
let menuClick = '.menuOff'
menuBurguer.addEventListener('click', function () {
  const menu = document.querySelector(menuClick)
  if (menu.classList.contains('menuOff')) {
    menu.classList.remove('menuOff')
    menu.classList.add('menuOn')
    menuClick = '.menuOn'
  } else {
    menu.classList.remove('menuOn')
    menu.classList.add('menuOff')
    menuClick = '.menuOff'
  }

})
