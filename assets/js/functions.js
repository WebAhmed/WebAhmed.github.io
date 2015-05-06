$(document).ready(function() {
  var homeParallaxInfo = $('#homeParallaxInfo')
  var aboutMe = $('#about-me')
  var figure = $('.figure')
  var intro = $('.intro')
  

//parallax

  intro.addClass('animated fadeInUp')

  $(window).scroll(function(){
    var wScroll = $(this).scrollTop()
    var aboutMeOffset = aboutMe.offset().top


    homeParallaxInfo.css({
      'transform' : 'translate(0px,'+ wScroll /2 +'%)'
    })

    if (aboutMeOffset > wScroll ) {
      figure.addClass('animated fadeInUp')
    } 

  })

  $('#skills-page').parallax();

});