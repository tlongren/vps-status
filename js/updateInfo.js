$(function() {
  function loadVPSInfo() {
      $.getJSON("/updateInfo.php", 
      function(result) {
		//alert(result);
		var serverStatus = result.0;
		alert(serverStatus);
    });
  }
  setInterval(loadVPSInfo, 600000);
  loadVPSInfo();
});