(function (window, $, PROJ) {
  'use strict';
  var PROJ = PROJ || {};
  var WIN = window;
  var DOC = document;
  var $DOC = $(document);


  // router
  $(function () {

    // hover
    if ($('.js-store').length > 0) {
      setHover.init();
    }

  });


  // setHover
  var setHover = {

    // init
    init: function () {
      var that = this;

      // event
      that.event();
    },

    // event
    event: function () {
      $('.pattern-a .js-store').hover(
        function () {
          var $that = $(this);
          var $target = $that.closest('li');
          $target.addClass('store-hover-a');
        },
        function () {
          var $that = $(this);
          var $target = $that.closest('li');
          $target.removeClass('store-hover-a');
        }
      );
      $('.pattern-b .js-store').hover(
        function () {
          var $that = $(this);
          var $target = $that.closest('li');
          $target.addClass('store-hover-b');
        },
        function () {
          var $that = $(this);
          var $target = $that.closest('li');
          $target.removeClass('store-hover-b');
        }
      );
      $('.pattern-c .js-store').hover(
        function () {
          var $that = $(this);
          var $target = $that.closest('li');
          $target.addClass('store-hover-c');
        },
        function () {
          var $that = $(this);
          var $target = $that.closest('li');
          $target.removeClass('store-hover-c');
        }
      );
    }
  };

})(window, jQuery, window.PROJ);