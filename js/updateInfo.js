
	$(document).setInterval(function(){
		theData = new Array();
		$.ajax({
		    url:"/updateInfo.php",
		    type:"GET",
		    success:function(result){
		        theData = result;
		        alert(result);
		    },
		    "json"
		});
	}, 5000);