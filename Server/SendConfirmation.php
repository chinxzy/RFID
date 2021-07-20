<?php 
    session_start();
    require_once 'Dependencies.php';
    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\SMTP;
    use PHPMailer\PHPMailer\Exception;

    //Load Composer's autoloader
    require 'PHPMailer/vendor/autoload.php';
    
	$Email= $_GET['Email'];
	$ConfirmationKey= $_GET['Key'];

	/*$Sql="SELECT * FROM EmailConfirmation WHERE Email= '$Email'";
	$Result=$Connection->query($Sql);
    $mail = new PHPMailer;
    $mail->isSMTP();
    $mail->SMTPDebug = 3;
    $mail->Host = 'smtp.gmail.com';
    $mail->SMTPAuth = true;
    $mail->Username = 'harlexibeh04@gmail.com';
    $mail->Password = 'Nickelodeo';
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;
    $mail->IsHTML(true);
    $mail->setFrom('harlexibeh04@gmail.com', 'TransportProject');
    $mail->addAddress("$Email",'New User'); 
    $mail->Subject = 'Signup Email Confirmation';
    $mail->Body    = "Click on the button to complete the registration process 
					   <a href='http://rfid-futo.herokuapp.com/Server/EmailConfirmation.php?ConfirmationKey=$ConfirmationKey' style='color=white !important; text-decoration:none; padding:13px;'>
					   Click
					   </a>";

   if($mail->send())
   {
	   $Connection->query($Sql);
	   header("Location: ../Client/Admin/MailSent.html");
   }*/

   $curl = curl_init();
    curl_setopt_array($curl, array(
    CURLOPT_URL => $_ENV['TRUSTIFI_URL'] . "/api/i/v1/email",
    CURLOPT_RETURNTRANSFER => true,
    CURLOPT_ENCODING => "",
    CURLOPT_MAXREDIRS => 10,
    CURLOPT_TIMEOUT => 0,
    CURLOPT_FOLLOWLOCATION => true,
    CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
    CURLOPT_CUSTOMREQUEST => "POST",
    CURLOPT_POSTFIELDS =>"{\"recipients\":[{\"email\":\"harlexibeh01@gmail\"}],\"title\":\"Title\",\"html\":\"Body\"}",
    CURLOPT_HTTPHEADER => array(
        "x-trustifi-key: " . $_ENV['TRUSTIFI_KEY'],
        "x-trustifi-secret: " . $_ENV['TRUSTIFI_SECRET'],
        "content-type: application/json"
    )
   ));

    $response = curl_exec($curl);
    $err = curl_error($curl);
    curl_close($curl);
    if ($err) {
    echo "cURL Error #:" . $err;
    } else {
    echo $response;
    }
?>