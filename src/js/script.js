const menu = document.querySelector('.menu');
const buttonBurger =  document.querySelector('.button--burger');

const menuItems = menu.querySelectorAll('.menu__item');
const menuItemHeight = menuItems[0].clientHeight;
const menuHeight = menuItemHeight * menuItems.length;

function toggleMenu() {
    if (menu.style.height === '0px') {
        menu.style.height = menuHeight + 'px';
    } else {
        menu.style.height = '0px'
    }

    buttonBurger.classList.toggle('button--close')
}

buttonBurger.addEventListener('click', toggleMenu);
