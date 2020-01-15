$(function ($) {
    "use strict";

    $('.home-slider').slick({
        vertical: true,
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000
    });

    $('.open-video').magnificPopup({
        disableOn: 700,
        type:'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: false,
        fixedContentPos: false
    });
});