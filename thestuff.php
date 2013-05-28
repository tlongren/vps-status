<?php
class status {
	public function performAction($url,$key,$hash,$action) {
		//$action = "status";
	    $ch = curl_init();
	    curl_setopt($ch, CURLOPT_URL, $url . "/command.php?key=".$key."&hash=".$hash."&action=".$action."&ipaddr=true&bw=true&mem=true&hdd=true");
	    curl_setopt($ch, CURLOPT_TIMEOUT, 20);
	    curl_setopt($ch, CURLOPT_FRESH_CONNECT, 1);
	    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
	    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
	    curl_setopt($ch, CURLOPT_HEADER, 0);
	    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
	    $data = curl_exec($ch);
	    curl_close($ch);

	    // Parse the returned data and build an array

	    preg_match_all('/<(.*?)>([^<]+)<\/\\1>/i', $data, $match);
	    $result = array();
	    foreach ($match[1] as $x => $y){
	    	$result[$y] = $match[2][$x];
	    }
	    return $result;
	}
}
?>