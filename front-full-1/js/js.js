$(document).ready(function () {
    function scrollMenu() {
        let navmenu = $('.nav-menu');
        console.log('amieeee');
        if ($(window).scrollTop() > 50) {
            navmenu.addClass('nav-menu2');
        } else {
            navmenu.removeClass('nav-menu2');
        }
    }
    scrollMenu();
    $(window).on('scroll', scrollMenu);
});
let navcollapse = $('#menucollapse');
navcollapse.on('show.bs.collapse', function () {
    $(this).parents('.nav-menu').addClass('nav-menu2');
});

navcollapse.on('hide.bs.collapse', function () {
    $(this).parents('.nav-menu').removeClass('nav-menu2');
});
var gallery = $('.img-gallery');
if (gallery.length && $.fn.owlCarousel) {
    gallery.owlCarousel({
        rtl: true,
        nav: false,
        items: 3,
        dots: true,
        center: true,
        autoplay: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 3
            }
        }
    });
}

