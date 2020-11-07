<?php
     header("Access-Control-Allow-Origin: *");
     session_start();

       require_once 'Dependencies.php';
       header("Content-Type: application/json; charset=UTF-8");
       $ObjInstance = json_decode($_POST["x"], false);
	  
	  $Result = $Connection->query("SELECT * FROM UserInfo");
	  $Data = array();
	  $FillIndex = 0;
	  
	  for($Count = 0; $Count < $Result->num_rows ; ++$Count)
	     {
		     $Row = $Result->fetch_array(MYSQLI_ASSOC);
				 $Data[$FillIndex] = array('UserID'=>$Row['UserId'] , 'FirstName'=>$Row['FirstName'] ,
                                           'LastName'=>$Row['LastName'],'Email'=>$Row['Email'], 
                                           'Phone'=>$Row['Phone'], 'EWallet'=>$Row['EWallet']);
		     $FillIndex++;
		 }
		 //$Reversed_Data =  array_reverse($Data);

	  echo json_encode($Data);
?>