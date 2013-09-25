;(function( $ ) {
  "use strict";
  $.keypad = function(el, options){
    var base = this, o;

    // Access to jQuery versions of element
    base.$el = el;

    base.init = function(options) {
      base.options = o = $.extend(true, {}, $.keypad.defaultOptions, options);
      base.$keypad = $(o.container);
      base.$el.addClass('keypad');
      base.update();

      base.initEvents();
    };

    base.initEvents = function(){
      base.opening = true;

      base.$keypad.on('tap', '.'+base.options.buttonsClass, function(){
        var value = $(this).data('value');
        base.update(value);
      });

      if(!base.options.opened){
        base.close();
      }

      if(!base.options.alwaysOpen){
        base.$el.on('tap', function(){
          base.toggle();
        });
      }

      // Close with clicking outside
      $(document).bind('mousedown.keypad touchstart.keypad', function(e){
        if( base.opening ){ return; }
        if( base.options.alwaysOpen ){ return; }

        if ( e.target && ( !$(e.target).hasClass('keypad') && !$(e.target).hasClass(base.options.buttonsClass)) ) {
          base.close();
        }
      });

      setTimeout(function(){ base.opening = false; }, 10);
    };

    base.update = function(value){
      var $input = $(base.options.value);
      var currentValue = $input.val();
      switch (value) {
      case '+/-' :
        $input.val(Number(currentValue) * -1);
        break;
      case '<' :
        $input.val(currentValue.substring(0, currentValue.length - 1));
        break;
      default :
        var regexpMatches = base.options.regex.exec(currentValue+value);
        var newVal = (regexpMatches === null) ? currentValue : regexpMatches[0];
        $input.val(newVal);
        break;
      }
      base.$el.html($input.val() || base.options.defaultValue);
    };

    base.isVisible = function(){
      if (typeof(base.$keypad) === 'undefined') {
        return false;
      }
      return base.$keypad.css('bottom') === '0px';
    };

    base.toggle = function(){
      if(base.isVisible()){
        base.close();
      }
      else{
        base.open();
      }
    };

    base.close = function(){
      base.$keypad.animate({ bottom: '-' + base.$keypad.css('height') }, 100);
    };

    base.open = function(){
      base.$keypad.animate({ bottom: '0px' }, 100);
    };

    base.init(options);
  };

  $.keypad.defaultOptions = {
    container: '#keypad',
    buttonsClass: 'btns',
    value: '#duration_val',
    defaultValue: 0,
    opened: true,
    alwaysOpen: false,
    regex: /^([-|\+]{0,1}[0-9]+(\.?[0-9]?[0-9]?)?)/
  };

  $.fn.keypad = function(options){
    return (new $.keypad(this, options));
  };
}( jQuery ));