'use strict'

const burgerMenu = document.querySelector('.menu__burger'),
      menu = document.querySelector('.menu'),
      menuItem = document.querySelectorAll('.menu__i'),
      menuList = document.querySelector('.menu__list');


//открытие и закртие меню и бургера

burgerMenu.addEventListener('click', () => {
   burgerMenu.classList.toggle('menu__burger_active');
   menu.classList.toggle('menu_active');
   document.body.style = 'overflow: hidden';
});


//  закрытие меню и бургера по клику на элемент меню

menuItem.forEach(function (e) { 
   e.addEventListener('click', () => {
      burgerMenu.classList.toggle('menu__burger_active');
      menu.classList.toggle('menu_active');
      document.body.style = 'overflow: visible';
   });
});



