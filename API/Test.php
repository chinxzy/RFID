<?php
     header("Access-Control-Allow-Origin: *");
     session_start();

     if(!isset($_GET['busid']) || !isset($_GET['userid']))
     {
        $BusName = $_GET['busid'];
        $UserID = $_GET['userid'];

        echo 'Test::Data Received :: BusName=> ' . $BusName . ' UserID=> ' . $UserID;
     }

     else 
     {
          echo 'Response::Error'
     }
?>