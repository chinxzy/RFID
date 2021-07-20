<?php
    session_start();
	require_once '../Server/Dependencies.php';  

    $Sql= "DELETE FROM EmailConfirmation WHERE Email = 'harlexibeh01@gmail.com'";
	$Connection->query($Sql);
?>
