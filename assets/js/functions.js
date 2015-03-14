$(document).ready(function() {

  /* Full-page initialization */
  $('#fullpage').fullpage({
    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,
    // menu: '#menu',
    anchors: ['homePage', 'aboutPage', 'skillsPage', 'contactPage'],
    sectionsColor: ['', '#27ae60', '#3498db', '#9b59b6', '#8e44ad'],
    verticalCentered: true, /* center the screen*/
    navigation: true,
    navigationPosition: 'right',
    easing: 'easeInOutCubic',
    scrollingSpeed: 700
  });

});