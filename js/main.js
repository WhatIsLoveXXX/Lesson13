$(document).ready(function () {
    $('.slider').slick({
      autoplay: true,
      autoplaySpeed: 5000,
      dots: true,
      arrows: false,
      dotsClass: 'slick-dots',
        responsive: [
            {
              breakpoint: 1200,
              settings: {
                arrows: false
              }
            }]
    });
});

