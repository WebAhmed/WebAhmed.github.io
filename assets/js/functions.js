var homeParallaxInfo , aboutMe, figure, intro, skill;

$(document).ready(function() {
  $('#skills-parallax').parallax();
  
  homeParallaxInfo = $('#homeParallaxInfo')
  aboutMe = $('#about-me')
  figure = $('.figure')
  intro = $('.intro')
  skills = $('#skills')
  

//parallax

  intro.addClass('animated fadeInUp')

  $(window).scroll(function(){
    // the distance between the top of the window and current point
    var wScroll = $(this).scrollTop()
    var triggerPoint = $('window').height() / 1.2

    homeParallaxInfo.css({
      'transform' : 'translate(0px,'+ wScroll /2 +'%)'
    })

    // this avoids element not existing on other pages error
    if (aboutMe.length) {
      var aboutMeOffset = aboutMe.offset().top - triggerPoint

      if ( aboutMeOffset > wScroll ) {
        figure.addClass('animated fadeInUp')
      }
    }
  })

  

});