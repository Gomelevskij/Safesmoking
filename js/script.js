$(document).ready(function() {

  // Carousel to screen 3
  var owlMap = $(".section3-list");
  owlMap.owlCarousel({
    items: 1,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    mouseDrag: false,
    singleItem: true,
    nav: true,
    navText: false
  });

  owlMap.on('changed.owl.carousel', function(event) {
    var indexMap = '.map' + event.item.index;
    $(".map-icon").removeClass("active");
    $(indexMap).addClass("active");
  });

  $('.map-icon').click(function() {
    var mapSelector = $(this).attr("map-attr");
    owlMap.trigger('to.owl.carousel', [mapSelector, 500]);
  });

  // Carousel to screen 6
  var owlGrafic = $(".grafic-digital");
  owlGrafic.owlCarousel({
    items: 1,
    animateIn: 'fadeIn',
    animateOut: 'fadeOut',
    mouseDrag: false,
    singleItem: true,
    nav: true,
    navText: false
  });

  owlGrafic.on('changed.owl.carousel', function(event) {
    var indexGrafic = '.grafic' + event.item.index;
    $(".grafic-line").removeClass("active");
    $(indexGrafic).addClass("active");
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
