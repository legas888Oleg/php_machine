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

    if ($('.testy-gallery').length) {
        $('.testy-gallery').magnificPopup({
            type: 'image',
            classOnContentClick: true,
            mainClass: 'mfp-img-mobile',
            image: {
                verticalFit: true
            }
        });
    }

/*
        $('.testimonial-gallery').magnificPopup({
            delegate: 'a',
            type: 'image',
            tLoading: 'Loading image #%curr%...',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
                titleSrc: function(item) {
                    return item.el.attr('title') + '<small>by Marsel Van Oosten</small>';
                }
            }
        });
 */
});
