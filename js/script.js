$(document).ready(function() {

  // Carousel to screen 3
  $(".section3-list").owlCarousel({
    items: 1
  });

  // Circle to screen 3 in class 'round'
  var Circle = function(sel){
    var circles = document.querySelectorAll(sel);
    [].forEach.call(circles,function(el){
      var valEl = parseFloat(el.innerHTML);
      valEl = valEl*408/100;
      el.innerHTML = '<svg width="305" height="305" viewBox="0 0 150 160"><circle transform="rotate(-90)" r="65" cx="-80" cy="80" /><circle transform="rotate(-90)" style="stroke-dasharray:'+valEl+'px 408px;" r="65" cx="-80" cy="80" /></svg>';

    });
  };
  Circle('.round');

});
