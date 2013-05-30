$(function() {
  function loadVPSInfo() {
      $.getJSON("/updateInfo.php", 
      function(result) {
		//alert(result);
    });
  }
  setInterval(loadVPSInfo, 600000);
  loadVPSInfo();
});