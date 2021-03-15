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
        $ID = $Fetch['UserId'];
        $FirstName = $Fetch['FirstName'];
        $LastName = $Fetch['LastName'];
        $Email = $Fetch['Email'];
        $Phone = $Fetch['Phone'];

        echo json_encode(array("Balance"=>$Amount , "ID"=> $ID, "FirstName" => $FirstName, "LastName" => $LastName, "Email" => $Email, "Phone" => $Phone));
      }
?>