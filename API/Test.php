<?php
     header("Access-Control-Allow-Origin: *");
     session_start();

     if(empty($_GET['busid']) || empty($_GET['userid']))
     {
        $BusName = $_GET['busid'];
        $UserID = $_GET['userid'];

        echo 'Test::Data Received :: BusName=> ' . $BusName . ' UserID=> ' . $UserID;
     }

     else 
     {
          echo 'Response::Error';
     }
?>