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

	// formatBytes from here: http://stackoverflow.com/a/2510459/710233
	public function formatBytes($bytes, $precision = 2) { 
	    $units = array('B', 'KB', 'MB', 'GB', 'TB'); 
	    $bytes = max($bytes, 0); 
	    $pow = floor(($bytes ? log($bytes) : 0) / log(1024)); 
	    $pow = min($pow, count($units) - 1); 
	    // Uncomment one of the following alternatives
	    // $bytes /= pow(1024, $pow);
	    $bytes /= (1 << (10 * $pow)); 
	    return round($bytes, $precision) . ' ' . $units[$pow];
	}

	function googl_shortlink($url) {
		$http = new WP_Http();
		$headers = array('Content-Type' => 'application/json');
		$result = $http->request('https://www.googleapis.com/urlshortener/v1/url', array( 'method' => 'POST', 'body' => '{"longUrl": "' . $url . '"}', 'headers' => $headers));
		$result = json_decode($result['body']);
		$shortlink = $result->id;
		if ($shortlink) {
			add_post_meta($post_id, '_googl_shortlink', $shortlink, true);
			return $shortlink;
		}
		else {
			return $url;
		}
	}
}
?>