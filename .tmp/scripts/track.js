(function() {
  $(function() {
    'use strict';
    return $('a,div').click(function() {
      var action, category, categoryElem, elem, label;
      elem = $(this);
      label = $(this).attr('rel');
      if (label != null) {
        categoryElem = elem.closest('section,nav');
        if (categoryElem.length !== 0) {
          category = categoryElem.attr('rel');
          action = categoryElem.prop('tagName') === 'NAV' ? 'Navigate' : 'Click';
          log.info(category, action, label);
          return _gaq.push(['_trackEvent', category, action, label]);
        }
      }
    });
  });

}).call(this);
