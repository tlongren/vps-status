(function($){

  $.fn.keymapper = function(customOptions) {
    
    /* Default and extended options */
    var defaults = {};
    var options = $.extend({}, defaults, customOptions);


    function __keyListener(event)
    {
      /* Convert the string to uppercase to prevent different key codes for the same key */
      options.keys = options.keys.toUpperCase();

      /* check if it's a combination of keys */
      if (options.keys.indexOf('+') > -1)
      {
        /* split the keys */
        var keys_combination = options.keys.split('+');

        if (String.fromCharCode(event.keyCode) == keys_combination[1])
        {
          /* if 'ctrl' key is pressed */
          if (keys_combination[0] == 'CTRL' && event.ctrlKey == true)
            options.callback();

          /* if 'shift' key is pressed */
          if (keys_combination[0] == 'SHIFT' && event.shiftKey == true)
            options.callback();
        }
      }
      else
      {
        /* check if a single key is pressed and matches the specified in options */
        if (String.fromCharCode(event.which) == options.keys)
          options.callback();
      }

    }

    /* run! */
    return this.each(function(){
      
      /* event 'keydown' is listening on the element */
      $(this).bind('keydown', function(e){
        __keyListener(e);
      });

    });
  }

})(jQuery);