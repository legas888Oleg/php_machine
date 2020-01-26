$(function ($) {
    "use strict";

    if ($('.home-slider').length) {
        $('.home-slider').slick({
            vertical: true,
            arrows: false,
            dots: true,
            autoplay: true,
            autoplaySpeed: 2000
        });
    }

    //carousel
    if ($('.shop-carousel').length) {
        $('.shop-carousel').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            appendArrows: $('.shop-slider-navigation'),
            prevArrow: $('.left'),
            nextArrow: $('.right')
        });
    }

    if ($('.open-video').length) {
        $('.open-video').magnificPopup({
            disableOn: 700,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: false,
            fixedContentPos: false
        });
    }
});
