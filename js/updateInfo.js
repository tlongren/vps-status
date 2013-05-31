$(function() {
  function loadVPSInfo() {
      $.getJSON("/updateInfo.php", 
      function(result) {
		//alert(result);
		var serverStatus = result[0];
		var totalMem = result[1];
		var usedMem = result[2];
		var availMem = result[3];
		var memPercent = result[4];
		$("#memPercent").html("(" + memPercent + ")");
		var totalDisk = result[5];
		var usedDisk = result[6];
		var availDisk = result[7];
		var diskPercent = result[8];
		var totalBW = result[9];
		var usedBW = result[10];
		var availBW = result[11];
		var bwPercent = result[12];

		//alert(serverStatus);
    });
  }
  setInterval(loadVPSInfo, 5000);
  loadVPSInfo();
});