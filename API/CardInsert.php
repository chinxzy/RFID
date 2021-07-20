<?php
     header("Access-Control-Allow-Origin: *");
     session_start();
       
    require_once '../Server/Dependencies.php';
    header("Content-Type: application/json; charset=UTF-8");

    if(!empty($_GET['busid']) || !empty($_GET['userid']))
    {
        $BusName = $_GET['busid'];
        $UserID = $_GET['userid'];

        $BusDataResult = $Connection->query("SELECT * FROM BusData WHERE BusName = '$BusName'");
        $RouteName = '';
        if($BusDataResult->num_rows)
        {
        $BusDataRow = $BusDataResult->fetch_array(MYSQLI_ASSOC);
        $RouteName = $BusDataRow['Route'];
        }
        else
        {
        echo json_encode(
        array('Status'=> false, 
            'Message'=>"This Bus either does not exist or has been updated, contact admin for more info"
        )); exit;
        }

        $Price = 500.00;
        $Result = $Connection->query("SELECT * FROM UserInfo WHERE UserId = '$UserID'");
        if($Result->num_rows)
        {
        $Row = $Result->fetch_array(MYSQLI_ASSOC);
        $Amount = floatval($Row['EWallet']);
            
        if($Amount < $Price)
        {
        echo json_encode(
        array('Status'=> false, 
            'Message'=>"INSUFFICIENT FUNDS"
        )); exit;
        }

        else
        {
        $Amount -= $Price;
        $Connection->query("UPDATE UserInfo SET EWallet = $Amount WHERE UserId = '$UserID'");

        $Sql = "INSERT INTO  TravelHistory (UserId, Route, BusName, CurrentTime) 
        VALUES ('90dbe5d88ebfe7ddb19994ca867bdfe2', '$RouteName' , '$BusName', NOW())";
        $Connection->query($Sql);

        $num_of_passengers = intval($BusDataRow['TotalPassengers']);
        $num_of_passengers+=1;

        $amount_made = floatval($BusDataRow['EWallet']);
        $amount_made += $Price;

        $Connection->query("UPDATE BusData SET EWallet = $amount_made WHERE BusName = '$BusName'");
        $Connection->query("UPDATE BusData SET TotalPassengers = $num_of_passengers WHERE BusName = '$BusName'");

        echo json_encode(
        array('Status'=> true, 
            'Message'=>"SUCCESSFUL"
        ));
        }
        }

        else
        {
        echo json_encode(
        array('Status'=> false, 
        'Message'=>"User does not exist"
        )); exit;}
     }

     else 
     {
          echo 'Response::Error';
     }
?>