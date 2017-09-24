$(function () {

});

$.fn.alignElementsSameHeight = function () {
    $('.same-height-row').each(function () {

  var maxHeight = 0;
  var children = $(this).find('.same-height');
  children.height('auto');
  if ($(window).width() > 768) {
      children.each(function () {
    if ($(this).innerHeight() > maxHeight) {
        maxHeight = $(this).innerHeight();
    }
      });
      children.innerHeight(maxHeight);
  }

  maxHeight = 0;
  children = $(this).find('.same-height-always');
  children.height('auto');
  children.each(function () {
      if ($(this).height() > maxHeight) {
    maxHeight = $(this).innerHeight();
      }
  });
  children.innerHeight(maxHeight);

    });
}

$(window).load(function () {

    windowWidth = $(window).width();

    $(this).alignElementsSameHeight();
    pictureZoom();
});
$(window).resize(function () {

    newWindowWidth = $(window).width();

    if (windowWidth !== newWindowWidth) {
  setTimeout(function () {
      $(this).alignElementsSameHeight();
      fullScreenContainer();
      pictureZoom();
  }, 205);
  windowWidth = newWindowWidth;
    }

});
