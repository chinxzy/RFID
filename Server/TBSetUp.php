
<!DOCTYPE html>
<html>
  <head>
    <title>Setting up database</title>
  </head>
  <body>

    <h3>Setting up...</h3>
<?php 
  require_once 'Dependencies.php';

  CreateTable( 'UserInfo',
                 'UserId VARCHAR(255),
			            FirstName VARCHAR(255),
			            LastName VARCHAR(255),
			            Email VARCHAR(255),
			            Password VARCHAR(255),
                  Phone  VARCHAR(20),
                  EWallet DECIMAL(10,2)');

  CreateTable( 'EmailConfirmation',
                 'RandomKey VARCHAR(512),
			            UserId VARCHAR(255),
			          	FirstName VARCHAR(255),
			          	LastName VARCHAR(255),
			          	Email    VARCHAR(255),
                  Password VARCHAR(255),
                  Phone    VARCHAR(32)');
                  
  CreateTable( 'TravelHistory',
                  'UserId VARCHAR(255),
                   Route VARCHAR(255),
                   BusName VARCHAR(255),
                   CurrentTime TIMESTAMP DEFAULT CURRENT_TIMESTAMP'
               );

   CreateTable( 'TravelRoute',
                   'Route VARCHAR(255)'
               );
                    
    CreateTable( 'BusData',
                    'BusName VARCHAR(255),
                     Route VARCHAR(255),
                     TotalPassengers INT UNSIGNED,
                     EWallet DECIMAL(10,2)'
                 );         
?>

 <br>...done.
  </body>
</html>
