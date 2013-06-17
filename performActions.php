<?php
include 'config.php';
$theAction = $_GET['theAction'];
$status = new status();

$getStuff = $status->performAction($apiurl,$apikey,$apihash,$theAction);
?>