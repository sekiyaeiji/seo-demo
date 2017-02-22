(function (window, $, PROJ) {
  'use strict';
  var PROJ = PROJ || {};
  var WIN = window;
  var DOC = document;
  var $DOC = $(document);


  // router
  $(function () {

    // rendering a
    if ($('.js-jsr_a').length > 0) {
      rendering_a.init();
    }

    // rendering b
    if ($('.js-jsr_b').length > 0) {
      rendering_b.init();
    }

  });


  // rendering a
  var rendering_a = {

    // init
    init: function () {
      var that = this;

      // rendering
      that.rendering();
    },

    // rendering
    rendering: function () {
      var template = _.template($('#template-jsr').html());
      $('.js-jsr_a').append(
        template({
          "string": PROJ.Data.string01
        })
      );
    }
  };

  // rendering b
  var rendering_b = {

    // init
    init: function () {
      var that = this;

      // rendering
      that.rendering();
    },

    // rendering
    rendering: function () {
      var template = _.template($('#template-jsr').html());
      $('.js-jsr_b').append(
        template({
          "string": PROJ.Data.string01
        })
      );
      
      $('.js-ssr').hide();
    }
  };

})(window, jQuery, window.PROJ);