$(document).ready(function(){
    var $carousel = $('#bandboxCarousel');
    var scrollValue = 0;

    $carousel.carousel({
      interval: 2000, // Adjust the interval as needed
      pause: false
    });

    $carousel.on('slide.bs.carousel', function (e) {
      scrollValue += $('.carousel-item').outerWidth(true);
      $carousel.find('.carousel-inner').css('transform', 'translateX(' + -scrollValue + 'px)');
    });

    $carousel.on('slid.bs.carousel', function (e) {
      if (e.to === 0) {
        scrollValue = 0;
        $carousel.find('.carousel-inner').css('transform', 'translateX(' + -scrollValue + 'px)');
      }
    });
  });