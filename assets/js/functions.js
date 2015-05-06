$(document).ready(function() {
  var homeParallaxInfo = $('#homeParallaxInfo')
  $('#skills-page').parallax();

  $(window).scroll(function(){
    var wScroll = $(this).scrollTop()
    homeParallaxInfo.css({
      'transform' : 'translate(0px,'+ wScroll /2 +'%)'
    })
  })
});