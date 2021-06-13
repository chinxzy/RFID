<?php
    // header("Access-Control-Allow-Origin: *");
     //session_start();
     header("Content-Type: application/json; charset=UTF-8");
  
        $BusName = $_POST['busid'];
        $UserID = $_POST['userid'];

        echo 'Test::Data Received :: BusName=> ' . $_POST['busid'] . ' UserID=> ' . $_POST['userid'];
  
?>