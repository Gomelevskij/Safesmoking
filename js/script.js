$(document).ready(function() {

  $("input[type='tel']").mask("+7 (999) 999-99-99");

$('.wheip-item1').parallax({
    yparallax: true,
    yorigin: 'top'
});

$('.wheip-item2').parallax({
    yparallax: true,
    yorigin: 'bottom'
});

  // Input as material design
  $('.modal-content-box-input').blur(function(){
    if($(this).val().length !== 0) {
      $(this).addClass('filled');
    }
    else {
      $(this).removeClass('filled');
    }
  });

  // Navigation fixed
  var nav = $('.navigation');
  $(window).scroll(function () {
    if ($(this).scrollTop() > 700) {
      nav.addClass("fixed-bar");
      // nav.show();
    }
    else {
      nav.removeClass("fixed-bar");
      // nav.hide();
    }
  });

  // $('.navigation').scrollupbar();

  // Modal window on
  $('.modal-on').click(function() {
    $('.modal').modal('show');
    $('.modal-content').addClass("animated fadeInRight");
  });

  $('.modal-close').click(function() {
    $('.modal').modal('hide');
  });

  // Carousel to screen 3
  var owlMap = $(".section3-list");
  owlMap.owlCarousel({
    items: 1,
    animateIn: 'fadeInY',
    animateOut: 'fadeOutY',
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
    startPosition: 3,
    animateIn: 'fadeInY',
    animateOut: 'fadeOutY',
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

  $('.line-1,.line-2').click(function() {
    var graficIndex = $(this).parent().attr("grafic-attr");
    owlGrafic.trigger('to.owl.carousel', [graficIndex, 500]);
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

  // Navigation dot
  var section_items=$('.section'),
      navigation_items=$('#navigation a');

  updateNavigation();
  $(window).on('scroll', function(){
    updateNavigation();
  });

  navigation_items.on('click',function(event){
    event.preventDefault();
    smoothScroll($(this.hash));
  });

  $('.scroll_down').on('click',function(event){
    event.preventDefault();
    smoothScroll($(this.hash));
  });

  function updateNavigation() {
    section_items.each(function(){
      $this = $(this);
      var activeSection = $('#navigation a[href="#'+$this.attr('id')+'"]').data('number') - 1;
      if ( ( $this.offset().top - $(window).height()/2 < $(window).scrollTop() ) && ( $this.offset().top + $this.height() - $(window).height()/2 > $(window).scrollTop() ) ) {
        navigation_items.eq(activeSection).addClass('is-selected');
      }else {
        navigation_items.eq(activeSection).removeClass('is-selected');
      }
    });
  }

  function smoothScroll(target){
    $('body,html').animate(
        {'scrollTop':target.offset().top - 100}
        ,600);
  }

});
