$(document).ready(function() {

  /* Full-page initialization */
  $('#main-container').fullContent({ 
    stages: 'div', 
    mapPosition: [{v: 1, h: 1}, {v: 1, h: 2}, {v: 2, h: 1}, {v: 2, h: 2}], 
    stageStart: 1, 
    speedTransition: 800, 
    idComplement: 'page_', 
    ease: 'easeOutQuad' 
  });

  $('#skills-page').parallax();
});