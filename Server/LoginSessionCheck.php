<?php
  session_start();
  	require_once 'Dependencies.php';
	header("Content-Type: application/json; charset=UTF-8");
	$UserInfo=json_decode($_POST["x"], false);

	if(!empty($_SESSION['UserId']))
	    echo 1;
    else
	  echo 0;
?>