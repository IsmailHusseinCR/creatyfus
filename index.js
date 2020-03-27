

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
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow');
},  3000);

ScrollReveal().reveal('.tutorial', {delay: 300, reset: true});
ScrollReveal().reveal('.gebruikerz', {delay: 300, reset: true});
ScrollReveal().reveal('.work', {delay: 300, reset: true});
ScrollReveal().reveal('.who', {delay: 300, reset: true});
ScrollReveal().reveal('.team', {delay: 300, reset: true});
