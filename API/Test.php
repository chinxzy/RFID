<?php
     header("Access-Control-Allow-Origin: *");
     session_start();

     if(isset($_POST['busid']) || isset($_POST['userid']))
     {
        $BusName = $_POST['busid'];
        $UserID = $_POST['userid'];

        echo 'Test::Data Received :: BusName=> ' . $BusName . ' UserID=> ' . $UserID;
     }

     else 
     {
          echo 'Response::Error';
     }
?>