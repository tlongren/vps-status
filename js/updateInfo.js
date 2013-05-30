$(function() {
  function loadVPSInfo() {
      $.getJSON("/updateInfo.php", 
      function(result) {
		alert(result);
    });
  }
  setInterval(loadVPSInfo, 5000);
  loadVPSInfo();
});