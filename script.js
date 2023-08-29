document.addEventListener('DOMContentLoaded', function () {
    const menuLogo = document.querySelector('.menu-logo');
    const menuNavs = document.querySelector('.menu');
    const menuItems = document.querySelector('.menu-list');
    const menuIcon = menuLogo.querySelector('img');

    menuLogo.addEventListener('click', () => {
        if (menuIcon.src.includes('icon-hamburger')) {
          menuIcon.src = 'images/icon-close.svg';
        } else {
          menuIcon.src = 'images/icon-hamburger.svg';
        }
      });

    menuLogo.addEventListener('click', function () {
        menuNavs.classList.toggle('visible');
        menuItems.classList.toggle('visible');
    });
});