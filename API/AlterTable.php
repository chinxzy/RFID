<?php
     header("Access-Control-Allow-Origin: *");
     session_start();

       require_once '../Server/Dependencies.php';
       header("Content-Type: application/json; charset=UTF-8");
      
       $Sql = "ALTER TABLE BusData ADD TotalPassengers INT UNSIGNED";
       $Connection->query($Sql);

       $Sql = "ALTER TABLE BusData ADD EWallet DECIMAL(10,2)";
       $Connection->query($Sql);
?>