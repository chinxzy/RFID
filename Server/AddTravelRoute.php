<?php
       session_start();
       require_once 'Dependencies.php';

       header("Content-Type: application/json; charset=UTF-8");
       $Data=json_decode($_POST["x"], false);

       $NewRoute = $Data->Route;

       $Result = $Connection->query("SELECT * FROM TravelRoute WHERE Route = '$NewRoute'");
     
       if($Result->num_rows)
       {
         echo json_encode("<h4 style='color:gold'>". $NewRoute . " already exist</h4>");
       }

       else
       {
         $Sql = "INSERT INTO  TravelRoute (Route) 
         VALUES ('$NewRoute')";
         $Connection->query($Sql);
 
         echo json_encode('<h4 style="color:green">'. $NewRoute . ' has been successfully added</h4>');
       }
?>
