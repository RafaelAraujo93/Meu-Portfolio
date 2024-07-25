document.addEventListener('DOMContentLoaded', function () {
    const btnMenu = document.getElementById('btn-menu');
    const menuMobile = document.getElementById('menu-mobile');
    const overlayMenu = document.getElementById('overlay-menu');
    const btnFechar = document.querySelector('.btn-fechar i');

    btnMenu.addEventListener('click', () => {
        menuMobile.classList.toggle('abrir-menu');
    });

    overlayMenu.addEventListener('click', () => {
        menuMobile.classList.remove('abrir-menu');
    });

    btnFechar.addEventListener('click', () => {
        menuMobile.classList.remove('abrir-menu');
    });
});
