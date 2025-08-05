"use strict";
let menuBtn = document.getElementById("menu-btn");
let sideNav = document.getElementById("side-nav");
let menu = document.getElementById("menu");

sideNav.style.right = "-250px";

menuBtn.onclick = function () {
  if (sideNav.style.right == "-250px") {
    sideNav.style.right = "0";
    menu.src = "assets/images/close.png";
  } else {
    sideNav.style.right = "-250px";
    menu.src = "assets/images/menu.png";
  }
};
