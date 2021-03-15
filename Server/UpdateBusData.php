<?php
       session_start();
       require_once 'Dependencies.php';

       header("Content-Type: application/json; charset=UTF-8");
       $Data=json_decode($_POST["x"], false);

       $OldBusName = $Data->OldBusName;
       $NewBusName = $Data->NewBusName;
       $Route = $Data->Route;

       if($OldBusName != $NewBusName)
       {
         $Result = $Connection->query("SELECT * FROM BusData WHERE BusName = '$NewBusName'");

          if($Result->num_rows)
           {
              echo json_encode("<h4 style='color:gold'>". $NewBusName . " already exist</h4>");
            }

          else
           {
             $Connection->query("UPDATE BusData SET BusName = '$NewBusName' WHERE BusName = '$OldBusName'");
             $Connection->query("UPDATE BusData SET Route = '$Route' WHERE BusName = '$NewBusName'");
            
             echo json_encode('<h4 style="color:green">'. $NewBusName . ' has been successfully updated</h4>');
            }
        }

        else
        {
            //Busname was not changed, so update only Route-->
             $Connection->query("UPDATE BusData SET Route = '$Route' WHERE BusName = '$OldBusName'");
             echo json_encode('<h4 style="color:green">'. $OldBusName . ' has been successfully updated</h4>');
        }   
?>