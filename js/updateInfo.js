$(function() {
  function loadVPSInfo() {
      $.getJSON("/updateInfo.php", 
      function(result) {
		//alert(result);
		var statusMessage = result[0];
		$("#statusMessage").html("(" + statusMessage + ")");
		var totalMem = result[1];
		$("#totalMem").html("(" + totalMem + ")");
		var usedMem = result[2];
		$("#usedMem").html("(" + usedMem + ")");
		var availMem = result[3];
		$("#availMem").html("(" + availMem + ")");
		var memPercent = result[4];
		$("#memPercent").html("(" + memPercent + "%)");
		$("#memPercentBar").css("width", memPercent + "%");
		var totalDisk = result[5];
		$("#totalDisk").html("(" + totalDisk + ")");
		var usedDisk = result[6];
		$("#usedDisk").html("(" + usedDisk + ")");
		var availDisk = result[7];
		$("#availDisk").html("(" + availDisk + ")");
		var diskPercent = result[8];
		$("diskPercent").html("(" + diskPercent + "%)");
		$("#diskPercentBar").css("width", diskPercent + "%");
		var totalBW = result[9];
		$("#totalBW").html("(" + totalBW + ")");
		var usedBW = result[10];
		$("#usedBW").html("(" + usedBW + ")");
		var availBW = result[11];
		$("#availBW").html(availBW);
		var bwPercent = result[12];
		$("#bwPercent").html("(" + bwPercent + "%)");
		$("#bwPercentBar").css("width", bwPercent + "%");
		var onlineMessage = result[13];
		$("#onlineMessage").html("(" + onlineMessage + ")");
		var offlineMessage = result[14];
		$("#offlineMessage").html("(" + offlineMessage + ")");
		var onlineReload = result[12];
		$("#onlineReload").html("(" + onlineReload + ")");
		var offlineReload = result[12];
		$("#offlineReload").html("(" + offlineReload + ")");

		//alert(serverStatus);
    });
  }
  setInterval(loadVPSInfo, 5000);
  loadVPSInfo();
});