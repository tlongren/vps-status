<?php
/* You can edit all this stuff. */
$apiurl = "https://solus.fliphost.net/api/client";							// URL to your API client URL, provided by your host
$apikey = "MBU8J-OXTP9-6FM70";												// Your API Key, provided by your host
$apihash = "09c999cb43e981f5eb4bcaacdf26e335948bb890";						// Your API Hash, provided by your host
$trustedIP = array("173.22.40.33");											// Allow these IP addresses
$onlineMessage = "This is good, very good.";								// Message below "It's Online" text
$onlineReload = "It's Good, Reload Anyway?";									// Text for online reload button
$offlineMessage = "Something must be wrong, this is not good at all.";		// Message below "It's offline" text
$offlineReload = "Try Again?";											// Text for offline reload button
/* You should probably stop editing now. Only edit stuff after this if you know what you're doing. */

include 'thestuff.php';

$headers = apache_request_headers(); $real_client_ip = $headers["X-Forwarded-For"];

$status = new status();
$getStuff = $status->performAction($apiurl,$apikey,$apihash,"status");

$statusMessage = $getStuff['statusmsg'];

$memory = explode(",",$getStuff['mem']);
//$totalMem = round($memory[0]/1024/1024, 2)."MB";
//$usedMem = round($memory[1]/1024/1024, 2)."MB";
//$availMem = round($memory[2]/1024/1024, 2)."MB";
$totalMem = $status->formatBytes($memory[0]);
$usedMem = $status->formatBytes($memory[1]);
$availMem = $status->formatBytes($memory[2]);
$memPercent = round($memory[1]/$memory[0]*100, 0);

$disk = explode(",",$getStuff['hdd']);
$totalDisk = round($disk[0]/1024/1024/1024, 2)."GB";
$usedDisk = round($disk[1]/1024/1024/1024, 2)."GB";
$availDisk = round($disk[2]/1024/1024/1024, 2)."GB";
$diskPercent = round($usedDisk/$totalDisk*100, 0);

$bandwidth = explode(",",$getStuff['bw']);
$totalBW = round($bandwidth[0]/1024/1024/1024/1024, 2)."TB";
$usedBW = round($bandwidth[1]/1024/1024/1024/1024, 2)."TB";
$availBW = round($bandwidth[2]/1024/1024/1024/1024, 2)."TB";
$bwPercent = round($usedBW/$totalBW*100, 0);
if ($usedBW < 1) {
  $usedBW = round($bandwidth[1]/1024/1024/1024, 2)."GB";
}
?>