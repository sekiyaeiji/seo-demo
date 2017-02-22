(function (window, $, PROJ) {
  'use strict';
  var PROJ = PROJ || {};
  var WIN = window;
  var DOC = document;
  var $DOC = $(document);
  var $BOD = $('body');


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

      // event
      that.event();
    },

    // event
    event: function () {
      var that = this;
      
      $BOD.on('click', '.js-jsr_a', that.transition)
    },

    // rendering
    rendering: function () {
      var template = _.template($('#template-jsr').html());
      $('.js-jsr_a').append(
        template({
          "string": PROJ.Data.string01
        })
      );
    },

    // transition
    transition: function () {
      var that = this;
      
      var current = $('.js-jsrString').text();
      var $target_text = $('.js-jsrString');
      var $target_block = $('.js-jsr_a');

      if (current === PROJ.Data.string01) {
        $target_text
          .empty()
          .html(PROJ.Data.string02);
        $target_block
          .removeClass('p-section-jsr')
          .addClass('p-section-jsr02');
      }
      else if (current === PROJ.Data.string02) {
        $target_text
          .empty()
          .html(PROJ.Data.string03);
        $target_block
          .removeClass('p-section-jsr02')
          .addClass('p-section-jsr03');
      }
      else if (current === PROJ.Data.string03) {
        $target_text
          .empty()
          .html(PROJ.Data.string04);
        $target_block
          .removeClass('p-section-jsr03')
          .addClass('p-section-jsr04');
      }
      else if (current === PROJ.Data.string04) {
        $target_text
          .empty()
          .html(PROJ.Data.string05);
        $target_block
          .removeClass('p-section-jsr04')
          .addClass('p-section-jsr05');
      }
    }
  };

  // rendering b
  var rendering_b = {

    // init
    init: function () {
      var that = this;

      // rendering
      that.rendering();

      // event
      that.event();
    },

    // event
    event: function () {
      var that = this;

      $BOD.on('click', '.js-jsr_b', that.transition)
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
    },

    // transition
    transition: function () {
      var that = this;

      var current = $('.js-jsrString').text();
      var $target_text = $('.js-jsrString');
      var $target_block = $('.js-jsr_b');

      if (current === PROJ.Data.string01) {
        $target_text
          .empty()
          .html(PROJ.Data.string02);
        $target_block
          .removeClass('p-section-jsr')
          .addClass('p-section-jsr02');
      }
      else if (current === PROJ.Data.string02) {
        $target_text
          .empty()
          .html(PROJ.Data.string03);
        $target_block
          .removeClass('p-section-jsr02')
          .addClass('p-section-jsr03');
      }
      else if (current === PROJ.Data.string03) {
        $target_text
          .empty()
          .html(PROJ.Data.string04);
        $target_block
          .removeClass('p-section-jsr03')
          .addClass('p-section-jsr04');
      }
      else if (current === PROJ.Data.string04) {
        $target_text
          .empty()
          .html(PROJ.Data.string05);
        $target_block
          .removeClass('p-section-jsr04')
          .addClass('p-section-jsr05');
      }
    }
  };

})(window, jQuery, window.PROJ);