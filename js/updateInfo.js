$(document).ready(function() {
	setInterval(function(){
		theData = new Array();
		$.ajax({
		    url:"/updateInfo.php",
		    type:"GET",
		    success:function(result){
		        theData = result;
		        alert(theData);
		    },
		    "json"
		});
	}, 5000);
});	