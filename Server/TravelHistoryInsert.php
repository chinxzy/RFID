<?php
     header("Access-Control-Allow-Origin: *");
     session_start();

       require_once 'Dependencies.php';
       header("Content-Type: application/json; charset=UTF-8");
      
       $Sql = "INSERT INTO  TravelHistory (UserId, Route, BusName, CurrentTime) 
                    VALUES ('90dbe5d88ebfe7ddb19994ca867bdfe2', 'Agege - Surulere', 'WhiteLegion', NOW())";
                    $Connection->query($Sql);
?>