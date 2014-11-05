(function() {
  $(function() {
    return $('#background div.jumbotron').each(function() {
      var elem;
      elem = $(this);
      return elem.find('.bg-full-container').css('height', '0px');
    }).click(function(e) {
      var container, elem, targetHeight;
      if (e.target.tagName.toLowerCase() === 'a') {
        return;
      }
      e.preventDefault();
      elem = $(this);
      container = elem.find('.bg-full-container');
      targetHeight = 0;
      if (container.height() === 0) {
        targetHeight = container.find('.bg-full').height() + 60;
        elem.addClass('expanded');
      } else {
        elem.removeClass('expanded');
      }
      return container.animate({
        'height': targetHeight
      }, 500, function() {
        return $('body').scrollspy('refresh');
      });
    });
  });

}).call(this);
