$('.slick-slider').slick({
    prevArrow: $('.prev'),
    nextArrow: $('.next')
});

$(".slick-slider").on('afterChange', function (event, slick, currentSlide){
    if(currentSlide < 10){
        $(".gallery-counter__counter").text(`0${currentSlide+1}`)
    }
    else{
        $(".gallery-counter__counter").text(currentSlide+1)
    }
});