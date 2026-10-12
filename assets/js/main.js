// menu mobile
var menuButton = document.getElementById('menu-button');
var mobileMenu = document.getElementById('mobile-menu');
var siteHeader = document.getElementById('site-header');

if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function () {
        mobileMenu.classList.toggle('open');
    });
}

// muda um pouco a navbar quando fazemos scroll
if (siteHeader) {
    window.addEventListener('scroll', function () {
        if (window.scrollY > 20) {
            siteHeader.classList.add('scrolled');
        } else {
            siteHeader.classList.remove('scrolled');
        }
    });
}

// fecha o menu depois de clicar num link
document.querySelectorAll('.mobile-menu a').forEach(function (link) {
    link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
    });
});
