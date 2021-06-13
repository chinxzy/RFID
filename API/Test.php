<?php
    // header("Access-Control-Allow-Origin: *");
     //session_start();
     header("Content-Type: application/json; charset=UTF-8");
  
        $BusName = $_GET['busid'];
        $UserID = $_GET['userid'];

        echo 'Test::Data Received :: BusName=> ' . $_GET['busid'] . ' UserID=> ' . $_GET['userid'];
  
?>