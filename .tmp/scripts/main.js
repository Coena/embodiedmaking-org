(function() {
  $(function() {
    'use strict';
    var fixedControls, isFixedControls, scrollToPosition;
    scrollToPosition = function(event) {
      var target;
      if (event != null) {
        event.preventDefault();
      }
      target = $(this).attr('href');
      return $('body').animate({
        scrollTop: $(target).offset().top + 1
      }, 500, function() {
        return window.location.hash = target;
      });
    };
    $('nav a,.nav-home').click(scrollToPosition);
    $('body').scrollspy({
      target: '#pf-nav-content'
    });
    isFixedControls = function() {
      return window.pageYOffset > $('#home').height();
    };
    fixedControls = isFixedControls();
    return window.onscroll = function() {
      var shouldFixControls;
      shouldFixControls = isFixedControls();
      if (fixedControls !== shouldFixControls) {
        fixedControls = shouldFixControls;
        if (shouldFixControls) {
          return $('#pf-logo-content,#pf-nav-content').css('position', 'fixed');
        } else {
          return $('#pf-logo-content,#pf-nav-content').css('position', 'absolute');
        }
      }
    };
  });

}).call(this);
