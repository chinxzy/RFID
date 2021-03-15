<?php
     header("Access-Control-Allow-Origin: *");
     session_start();

       require_once 'Dependencies.php';
       header("Content-Type: application/json; charset=UTF-8");
       $ObjInstance = json_decode($_POST["x"], false);
       $UserID = $ObjInstance->UserID;
       
	   if($UserID == "Empty")
	   {
		 $UserID = $_SESSION['UserId'];
	   }

	  $Result = $Connection->query("SELECT * FROM TravelHistory WHERE UserId = '$UserID' ORDER BY CurrentTime DESC");
	  $Data = array();
	  $FillIndex = 0;
	  
	  for($Count = 0; $Count < $Result->num_rows ; ++$Count)
	     {
		     $Row = $Result->fetch_array(MYSQLI_ASSOC);
				 $Data[$FillIndex] = array('UserID'=>$Row['UserId'] , 'Route'=>$Row['Route'] ,
                                           'BusName'=>$Row['BusName'],'TimeStamp'=>$Row['CurrentTime']);
		     $FillIndex++;
		 }

	     echo json_encode($Data);
?>