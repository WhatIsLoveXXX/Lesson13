$(document).ready(function () {
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      arrows: false,
      dotsClass: 'slick-dots',
        responsive: [
            {
              breakpoint: 767,
              settings: {
                dots: false
              }
            }]
    });
});

