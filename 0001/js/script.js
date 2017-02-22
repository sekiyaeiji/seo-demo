(function (window, $, PROJ) {
  'use strict';
  var PROJ = PROJ || {};
  var WIN = window;
  var DOC = document;
  var $DOC = $(document);


  // router
  $(function () {

    // rendering
    if ($('.js-jsr').length > 0) {
      rendering.init();
    }

  });


  // rendering
  var rendering = {

    // init
    init: function () {
      var that = this;

      // rendering
      that.rendering();
    },

    // rendering
    rendering: function () {
      var template = _.template($('#template-jsr').html());
      $('.js-jsr').append(
        template({
          "string": PROJ.Data.string01
        })
      );
    }
  };

})(window, jQuery, window.PROJ);