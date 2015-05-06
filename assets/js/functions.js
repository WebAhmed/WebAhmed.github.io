var homeParallaxInfo , aboutMe, figure, intro;

$(document).ready(function() {
  $('#skills-parallax').parallax();
  
  homeParallaxInfo = $('#homeParallaxInfo')
  aboutMe = $('#about-me')
  figure = $('.figure')
  intro = $('.intro')
  

//parallax

  intro.addClass('animated fadeInUp')

  $(window).scroll(function(){
    // the distance between the top of the window and current point
    var wScroll = $(this).scrollTop()


    homeParallaxInfo.css({
      'transform' : 'translate(0px,'+ wScroll /2 +'%)'
    })

    // this avoids element not existing on other pages error
    if (aboutMe.length) {
      if ( aboutMe.offset().top > wScroll ) {
        figure.addClass('animated fadeInUp')
      }
    }

  })

  

});