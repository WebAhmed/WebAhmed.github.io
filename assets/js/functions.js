$(document).ready(function() {

  /* Full-page initialization */
  $('#fullpage').fullpage({
    //Accessibility
    keyboardScrolling: true,
    animateAnchor: true,
    recordHistory: true,
    css3: true,
    // menu: '#menu',
    anchors: ['homePage', 'aboutPage', 'skillsPage', 'contactPage'],
    verticalCentered: true, /* center the screen*/
    navigation: true,
    navigationPosition: 'right',
    easing: 'easeInOutCubic',
    scrollOverflow: true,
    scrollingSpeed: 700
  });
});