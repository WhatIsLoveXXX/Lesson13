$(document).ready(function () {
    $('.slider-inner').slick({
        autoplay: true,
        autoplaySpeed: 8000,
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                arrows: false
              }
            }]
    });
});

