$(document).ready(function(){
  $('button#boot').click(function() {
    var l = Ladda.create( document.querySelector( '#boot' ) );
    l.start();
    $.get('/performActions.php?theAction=boot', function(data) {
      l.stop();
      $("#actionResults").show(0).delay(8000).hide(0);
      $("#bootResult").show(0).delay(7777).hide(0);
    });
    return false;
  });

  $('button#reboot').click(function() { 
    var l = Ladda.create( document.querySelector( '#reboot' ) );
    l.start();
    $.get('/performActions.php?theAction=reboot', function(data) {
      l.stop();
      $("#actionResults").show(0).delay(8000).hide(0);
      $("#rebootResult").show(0).delay(7777).hide(0);
    });
    return false;
  });

  $('button#shutdown').click(function() {
    var l = Ladda.create( document.querySelector( '#shutdown' ) );
    l.start();
    $.get('/performActions.php?theAction=shutdown', function(data) {
      l.stop();
      $("#actionResults").show(0).delay(8000).hide(0);
      $("#shutdownResult").show(0).delay(7777).hide(0);
    });
    return false;
  });
});