<?php
     session_start();
       require_once 'Dependencies.php';
       header("Content-Type: application/json; charset=UTF-8");
       $ObjInstance = json_decode($_POST["x"], false);
	     $UserID = $_SESSION['UserId'];
	  
      $Result = $Connection->query("SELECT * FROM UserInfo WHERE UserId = '$UserID'");
      $Fetch = $Result->fetch_array(MYSQLI_ASSOC);
    
      if($Result->num_rows)
      {
        $Amount = $Fetch['EWallet'];
        echo json_encode($Amount);
      }
?>