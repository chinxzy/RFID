<?php
  session_start();
  	require_once 'Dependencies.php';
	header("Content-Type: application/json; charset=UTF-8");
	$UserInfo=json_decode($_POST["x"], false);

    $Password =  password_hash($UserInfo->Password, PASSWORD_DEFAULT);
    $UserID =  $_SESSION['User'];
    
    $DbAuthentication = $Connection->query("UPDATE UserInfo SET Password = '$Password' WHERE UserId = '$UserID'");

    if($DbAuthentication === true){
        echo json_encode(true); #successful
    }

    else{
        #To Do Failure Handler
    }
?>