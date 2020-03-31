

$(".arrow").click(function() {
    $('html,body').animate({
        scrollTop: $(".who").offset().top},
        'slow');
});




var image = document.getElementsByClassName('thumbnail');
new simpleParallax(image, { 
    scale: 2,
    delay: 1
});


$("#slideshow > div:gt(0)").hide();

setInterval(function() { 
  $('#slideshow > div:first')
    .fadeOut(4000)
    .next(4000)
    .fadeIn(4000)
    .end(4000)  
    .appendTo('#slideshow');
},  4000);

ScrollReveal().reveal('.tutorial', {delay: 100, reset: false});
ScrollReveal().reveal('.gebruikerz', {delay: 100, reset: false});
ScrollReveal().reveal('.work', {delay: 100, reset: false});
ScrollReveal().reveal('.who', {delay: 100, reset: false});
ScrollReveal().reveal('.team', {delay: 100, reset: false});
ScrollReveal().reveal('.values', {delay: 100, reset: false});
