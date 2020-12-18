$(document).ready(function () {
    $('.header-burger').click(function(event) {
        $('.header-burger,.navigation').toggleClass('current');
        $('body').toggleClass('lock')
    });
});