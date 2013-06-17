$(document).ready(function(){
  $('button#boot').click(function() {
    var l = Ladda.create( document.querySelector( '#boot' ) );
    l.start();
    $.get('/performActions.php?theAction=boot', function(data) {
      l.stop();
      $("#actionResults").show();
      $("#bootResult").show();
    });
    return false;
  });

  $('button#reboot').click(function() { 
    var l = Ladda.create( document.querySelector( '#reboot' ) );
    l.start();
    $.get('/performActions.php?theAction=reboot', function(data) {
      l.stop();
      $("#actionResults").show();
      $("#rebootResult").show();
    });
    return false;
  });

  $('button#shutdown').click(function() {
    var l = Ladda.create( document.querySelector( '#shutdown' ) );
    l.start();
    $.get('/performActions.php?theAction=shutdown', function(data) {
      l.stop();
      $("#actionResults").show();
      $("#shutdownResult").show();
    });
    return false;
  });
});