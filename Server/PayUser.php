<?php
     header("Access-Control-Allow-Origin: *");
     session_start();

       require_once 'Dependencies.php';
       header("Content-Type: application/json; charset=UTF-8");
       $Data = json_decode($_POST["x"], false);
       $ID = $Data->ID;
       $Amount = floatval($Data->Amount);
       
      $Result = $Connection->query("SELECT * FROM UserInfo WHERE UserId = '$ID' OR Email = '$ID'");
      if($Result->num_rows)
      {
        $Row = $Result->fetch_array(MYSQLI_ASSOC);
        $Amount += floatval($Row['EWallet']);
  
        $Connection->query("UPDATE UserInfo SET EWallet = $Amount WHERE UserId = '$ID' OR Email = '$ID'");
        
        echo json_encode('<h4 style="color:green">' .$ID . " has been successfully credited with ₦" . 
                                 floatval($Data->Amount). " and has a balance of ₦". $Amount. '</h4>');
      }

     else
     {
         echo json_encode('<h4 style="color:red">' . $ID . 
           ' Does not exist in the database, check and make sure you are inputting it correctly</h4>');
     }
?>