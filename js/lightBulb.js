$(function () {

    $('.item').hide();

    $('.pagination').click(function(){
        $('.item').show();
    });

    $('.light_bulb').click(function () {
        $(this).attr('src', '/img/logo.png');
    });

});