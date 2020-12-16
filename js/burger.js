$(document).ready(function () {
    $('.header-burger').click(function(event) {
        $('.header-burger,.nav').toggleClass('current');
        $('body').toggleClass('lock')
    });
});