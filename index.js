

$(".arrow").click(function() {
    $('html,body').animate({
        scrollTop: $(".work").offset().top},
        'slow');
});


let position = $(".work").position().top + $(".work").outerHeight();
let bottom_of_window = $(window).scrollTop() + $(window).height();


console.log(position)

$(document).scroll(function () {
    var y = $(this).scrollTop();
    if ($(position > bottom_of_window)) {
        $('.tutorial').fadeIn();
    } else {
        $('.tutorial').fadeOut();
    }

});



