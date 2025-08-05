'use strict'
const menuBtn = document.getElementById('menu-btn')
const sideNav = document.getElementById('side-nav')
const menu = document.getElementById('menu')

sideNav.style.right = '-250px'

menuBtn.onclick = function () {
  if (sideNav.style.right === '-250px') {
    sideNav.style.right = '0'
    menu.src = 'assets/images/close.png'
  } else {
    sideNav.style.right = '-250px'
    menu.src = 'assets/images/menu.png'
  }
};
