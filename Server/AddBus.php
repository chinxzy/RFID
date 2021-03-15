<?php
       session_start();
       require_once 'Dependencies.php';

       header("Content-Type: application/json; charset=UTF-8");
       $Data=json_decode($_POST["x"], false);

       $BusName = $Data->BusName;
       $Route = $Data->Route;

       $Result = $Connection->query("SELECT * FROM BusData WHERE BusName = '$BusName'");
     
       if($Result->num_rows)
       {
         echo json_encode("<h4 style='color:gold'>". $BusName . " already exist</h4>");
       }

       else
       {
         $Sql = "INSERT INTO  BusData (BusName, Route) 
         VALUES ('$BusName', '$Route')";
         $Connection->query($Sql);
 
         echo json_encode('<h4 style="color:green">'. $BusName . ' has been successfully added</h4>');
       }
?>
