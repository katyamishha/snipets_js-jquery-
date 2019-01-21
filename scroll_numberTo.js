var flotId = 0;
$.fn.isInViewport = function () {
  var elementTop     = $(this).offset().top;
  var elementBottom  = elementTop + $(this).outerHeight();
  var viewportTop    = $(window).scrollTop();
  var viewportBottom = viewportTop + $(window).height();
  return elementBottom > viewportTop && elementTop < viewportBottom;
};
var countersFired = false;

function checkCounters() {

  $('.js-about-company__number').each(function () {
    if ($('.b-about-company').length && $('.b-about-company').isInViewport()) {
      $('.js-about-company__number').countTo();
      countersFired = true;
    }
  });
}

$(window).on('resize scroll', function () {
  if (!countersFired) {
    checkCounters();
  }
});
