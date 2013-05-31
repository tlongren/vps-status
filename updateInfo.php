<?php
include 'config.php';

$results = array($statusMessage,
	$totalMem,
	$usedMem,
	$availMem,
	$memPercent,
	$totalDisk,
	$usedDisk,
	$availDisk,
	$diskPercent,
	$totalBW,
	$usedBW,
	$availBW,
	$bwPercent,
	$onlineMessage,
	$offlineMessage,
	$onlineReload,
	$offlineReload);

echo json_encode($results);
?>