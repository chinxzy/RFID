<?php
     header("Access-Control-Allow-Origin: *");
     session_start();

  
        $BusName = $_POST['busid'];
        $UserID = $_POST['userid'];

        echo 'Test::Data Received :: BusName=> ' . $BusName . ' UserID=> ' . $UserID;
  
?>