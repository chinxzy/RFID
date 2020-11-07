
function LoginHandler()
{
   var Obj, DbParam, XmlHttp;
		Obj = {
		    "Email": document.getElementsByName("UserInfo")[0].value,
		    "Password": document.getElementsByName("UserInfo")[1].value
		};

		DbParam = JSON.stringify(Obj);
		XmlHttp = new XMLHttpRequest(); 
	
		XmlHttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200)
		    {
		        S_Response = JSON.parse(this.responseText);
		        if (S_Response['Check'] == false)
		            document.getElementById("ErrorMessage").innerHTML = '<h5 style="color:red">' + S_Response['Info'] + '</h5>';
		        else
		            window.location.href = "index_profile.html";
		    }
        };
        
    document.getElementById("ErrorMessage").innerHTML = '<h4 style = "color:purple">Please Wait..., while we process your operation</h4>';
    XmlHttp.open("POST", "../Server/Login.php", true);
    XmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    XmlHttp.send("x=" + DbParam);

    return false;
}

function NewUserSetPassword()
{
   var Obj, DbParam, XmlHttp;
		Obj = {
		    "Password": document.getElementsByName("UserInfo")[0].value
		};

        if(document.getElementsByName("UserInfo")[0].value != document.getElementsByName("UserInfo")[1].value)
        {
            document.getElementById("ErrorMessage").innerHTML = '<h5 style="color:red">Check and make sure you are inputing the password correctly</h5>';
            return false;
        }

		DbParam = JSON.stringify(Obj);
		XmlHttp = new XMLHttpRequest(); 
	
		XmlHttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200)
		    {
		        S_Response = JSON.parse(this.responseText);
		        if (S_Response === true){
                    window.location.href = "index.html";
                }
                  
		        else{
                    //To Do...failure handler
                }
		    }
        };
    
    document.getElementById("ErrorMessage").innerHTML = '<h4 style = "color:purple">Please Wait..., while we process your operation</h4>';
    XmlHttp.open("POST", "../Server/UpdatePassword.php", true);
    XmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    XmlHttp.send("x=" + DbParam);

    return false;
}

function SignupHandler()
{
     var Obj, DbParam, XmlHttp;
     Obj = {
            "FirstName": document.getElementsByName("UserInfo")[0].value,
            "LastName": document.getElementsByName("UserInfo")[1].value,
            "Email": document.getElementsByName("UserInfo")[2].value,
            "Phone": document.getElementsByName("UserInfo")[3].value
		   };

     DbParam = JSON.stringify(Obj);
     XmlHttp = new XMLHttpRequest(); 
   
    XmlHttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200)
    {
        S_Response = JSON.parse(this.responseText);
        myObj = JSON.parse(this.responseText);
        if (S_Response[0]['FirstName'] == false)
            document.getElementById("ErrorMessage").innerHTML = '<h5 style="color:red">' + S_Response[1]['FirstName'] + '</h5>';
        else if (S_Response[0]['LastName'] == false)
              document.getElementById("ErrorMessage").innerHTML = '<h5 style="color:red">' + S_Response[1]['LastName'] + '</h5>';
        else if (S_Response[0]['Phone'] == false)
                 document.getElementById("ErrorMessage").innerHTML = '<h5 style="color:red">' + S_Response[1]['Phone'] + '</h5>';
        else if (S_Response[0]['Email'] == false)
                 document.getElementById("ErrorMessage").innerHTML = '<h5 style="color:red">' + S_Response[1]['Email'] + '</h5>';
        else
            window.location.href = "../../Server/SendConfirmation.php?Email="+myObj[2]['Email']+"&Key="+myObj[2]['key']+"";
    }
      };
      
    document.getElementById("ErrorMessage").innerHTML = '<h4 style = "color:purple">Please Wait..., while we process your operation</h4>';
    XmlHttp.open("POST", "../../Server/SignUp.php", true);
    XmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    XmlHttp.send("x=" + DbParam);

    return false;
}

function ProfileOnLoad()
{
   var Obj, DbParam, XmlHttp;

		DbParam = JSON.stringify(Obj);
		XmlHttp = new XMLHttpRequest(); 
	
		XmlHttp.onreadystatechange = function() {
		    if (this.readyState == 4 && this.status == 200)
		    {
		        S_Response = JSON.parse(this.responseText);
                document.getElementById("AcctBalance").innerHTML = " " + S_Response;
		    }
		};
    XmlHttp.open("POST", "../Server/ProfileOnLoad.php", true);
    XmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    XmlHttp.send("x=" + DbParam);
}

function UserDataTableOnLoad()
{
    var Obj, DbParam, XmlHttp;

    DbParam = JSON.stringify(Obj);
    XmlHttp = new XMLHttpRequest(); 
  
   XmlHttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200)
   {
       document.getElementById("LoadUserTable").innerHTML = "";
       S_Response = JSON.parse(this.responseText);
       for(var i = 0; i < S_Response.length; i++ )
       {
           document.getElementById("LoadUserTable").innerHTML += "<tr onclick = 'TravelHistoryUpdate(\""+ S_Response[i]['UserID'] + "\")' style = 'cursor: pointer;' data-toggle = 'modal' data-target='#modal-default'>" + 
                                                                     '<td>' + S_Response[i]['UserID'] + '</td>' +
                                                                     '<td>' + S_Response[i]['FirstName'] + '&nbsp' + S_Response[i]['LastName'] + '</td>' +
                                                                     '<td>' + S_Response[i]['Email'] + '</td>' + 
                                                                     '<td>' + S_Response[i]['Phone'] + '</td>' +
                                                                     '<td>₦ ' + S_Response[i]['EWallet'] + '</td>' +
                                                                  '</tr>'
       }
   }
     };

   XmlHttp.open("POST", "../../Server/FetchUsers.php", true);
   XmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   XmlHttp.send("x=" + DbParam);
}

function TravelHistoryUpdate(UserID)
{
    var Obj, DbParam, XmlHttp;

    Obj = {
        "UserID": UserID
    };

    DbParam = JSON.stringify(Obj);
    XmlHttp = new XMLHttpRequest(); 
   
   XmlHttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200)
   {
       S_Response = JSON.parse(this.responseText);
       document.getElementsByClassName("modal-title")[0].innerHTML = 'Travel History: User <span style="color:green">' + 
                                                                      S_Response[0]['UserID'] + '</div>';
       document.getElementById("TravelHistoryTable").innerHTML = '';
       for(var i = 0; i < S_Response.length; i++ )
       {
           document.getElementById("TravelHistoryTable").innerHTML += "<tr style = 'cursor: pointer;'>" + 
                                                                          '<td>' + S_Response[i]['BusName'] + '</td>' +
                                                                          '<td>' + S_Response[i]['Route'] + '</td>' + 
                                                                          '<td>' + S_Response[i]['TimeStamp'] + '</td>' +
                                                                      '</tr>'
       }
   }
     };

   XmlHttp.open("POST", "../../Server/FetchTravelHistory.php", true);
   XmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   XmlHttp.send("x=" + DbParam);
}

function AddNewRoute()
{
    var Obj, DbParam, XmlHttp;

    Obj = {
        "Route": document.getElementsByName("RouteInfo")[0].value
    };

    DbParam = JSON.stringify(Obj);
    XmlHttp = new XMLHttpRequest(); 
   
   XmlHttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200)
   {
       S_Response = JSON.parse(this.responseText);
       document.getElementsByClassName("InfoLog")[0].innerHTML =  S_Response;
                                                                 
       document.getElementsByName("RouteInfo")[0].value = "";
   }
 }

 document.getElementsByClassName("InfoLog")[0].innerHTML = '<h4 style = "color:purple">Please Wait..., while we process your operation</h4>';
 XmlHttp.open("POST", "../../Server/AddTravelRoute.php", true);
 XmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
 XmlHttp.send("x=" + DbParam);

 return false;
}

function FetchTravelRouteOnLoad()
{
    var Obj, DbParam, XmlHttp;

    DbParam = JSON.stringify(Obj);
    XmlHttp = new XMLHttpRequest(); 
   
   XmlHttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200)
   {
       S_Response = JSON.parse(this.responseText);

       for(var i = 0; i < S_Response.length; i++ )
       {
           document.getElementsByClassName("Routes")[0].innerHTML += '<option value = ' + '"' + S_Response[i]['Route'] + '"' + '>' +
                                                               S_Response[i]['Route'] +
                                                           '</option>';
       }
   }
     };

   XmlHttp.open("POST", "../../Server/FetchTravelRoute.php", true);
   XmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   XmlHttp.send("x=" + DbParam);
}

function RegisterBusHandler()
{
    var Obj, DbParam, XmlHttp;
    Obj = {
        "BusName": document.getElementsByName("BusInfo")[0].value,
        "Route": document.getElementsByName("BusInfo")[1].value
    };

    if(document.getElementsByName("BusInfo")[1].value == "")
    {
        document.getElementsByClassName("InfoLog")[0].innerHTML = '<h4 style="color:red">You have not selected a Route option</h4>';
        return false;
    }

    DbParam = JSON.stringify(Obj);
    XmlHttp = new XMLHttpRequest(); 

    XmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            S_Response = JSON.parse(this.responseText);
            document.getElementsByClassName("InfoLog")[0].innerHTML = S_Response;

            document.getElementsByName("BusInfo")[0].value = "";
        }
    };

document.getElementsByClassName("InfoLog")[0].innerHTML = '<h4 style = "color:purple">Please Wait..., while we process your operation</h4>';
XmlHttp.open("POST", "../../Server/AddBus.php", true);
XmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
XmlHttp.send("x=" + DbParam);

return false;
}

function BusDataTableOnload()
{
    var Obj, DbParam, XmlHttp;

    DbParam = JSON.stringify(Obj);
    XmlHttp = new XMLHttpRequest(); 
    document.getElementById("LoadBusTable").innerHTML = "";
   XmlHttp.onreadystatechange = function() {
   if (this.readyState == 4 && this.status == 200)
   {
       S_Response = JSON.parse(this.responseText);
       for(var i = 0; i < S_Response.length; i++ )
       {
           document.getElementById("LoadBusTable").innerHTML += "<tr onclick = 'UpdateBusDataForm(\""+ S_Response[i]['BusName'] + "\")' style = 'cursor: pointer;' data-toggle = 'modal' data-target='#modal-default'>" + 
                                                                     '<td>' + S_Response[i]['BusName'] + '</td>' +
                                                                     '<td>' + S_Response[i]['Route'] + '</td>' +
                                                                     '<td>' + S_Response[i]['TotalPassengers'] + '</td>' +
                                                                     '<td>₦ ' + S_Response[i]['TotalAmount'] + '</td>' +
                                                                  '</tr>'
       }
   }
     };

   XmlHttp.open("POST", "../../Server/FetchBusData.php", true);
   XmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
   XmlHttp.send("x=" + DbParam);
}

function UpdateBusDataForm(busname)
{
    FetchTravelRouteOnLoad();

    document.getElementById("BusUpdateForm").innerHTML = '' +
      
      '<h4 class="modal-title">Update ' + '<span style="color:red">' + busname + '</span>' + ' Info</h4>' +
       '<div class="modal-body">' +
          //<!-- /.box-header -->
           '<div class="box-body">' +
             '<div class="login-box-body">' +
             "<form onsubmit = 'return UpdateBusDataHandler(\""+ busname + "\")'>" + 
                  '<div class = "InfoLog" style="text-align:center;">' +
                     //...
                   '</div>' +
                    '<div class="form-group has-feedback">' +
                       '<input type="text" class="form-control" placeholder="Unique Bus Name" name = "BusInfo" required>' +
                        '<span class="glyphicon fa fa-bus form-control-feedback"></span>' +
                    '</div>' +
                   //<!-- select -->
                   '<div class="form-group">' +
                      '<select class="form-control Routes" name = "BusInfo">' +
                        '<option value = "">Select from available Routes</option>' +  
                        '<option value = "No Assigned Route">Assign Route Later</option>' +
                      '</select>' +
                   '</div>' +
      
                  '<div class="row">' +
                   //<!-- /.col -->
                     '<div class="col-xs-4 pull-right">' +
                        '<button type="submit" class="btn btn-success btn-block btn-flat">Update</button>' +
                     '</div>' +
                   //<!-- /.col -->
                  '</div>' +
              '</form>' +
          '</div>' +
        '</div>' +
    '</div>' ;
    document.getElementsByName("BusInfo")[0].value = busname;
}

function UpdateBusDataHandler(busname)
{

    var Obj, DbParam, XmlHttp;
    Obj = {
        "OldBusName": busname,
        "NewBusName": document.getElementsByName("BusInfo")[0].value,
        "Route": document.getElementsByName("BusInfo")[1].value
    };

    if(document.getElementsByName("BusInfo")[1].value == "")
    {
        document.getElementsByClassName("InfoLog")[0].innerHTML = '<h4 style="color:red">You have not selected a Route option</h4>';
        return false;
    }

    DbParam = JSON.stringify(Obj);
    XmlHttp = new XMLHttpRequest(); 

    XmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            S_Response = JSON.parse(this.responseText);
            document.getElementsByClassName("InfoLog")[0].innerHTML = S_Response;

            BusDataTableOnload();
            document.getElementsByName("BusInfo")[0].value = "";
        }
    };

document.getElementsByClassName("InfoLog")[0].innerHTML = '<h4 style = "color:purple">Please Wait..., while we process your operation</h4>';
XmlHttp.open("POST", "../../Server/UpdateBusData.php", true);
XmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
XmlHttp.send("x=" + DbParam);

return false;
}

function PayUserHandler()
{
    var Obj, DbParam, XmlHttp;
    Obj = {
        "ID": document.getElementsByName("PayInfo")[0].value,
        "Amount": document.getElementsByName("PayInfo")[1].value
    };

    DbParam = JSON.stringify(Obj);
    XmlHttp = new XMLHttpRequest(); 

    XmlHttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200)
        {
            S_Response = JSON.parse(this.responseText);
            document.getElementsByClassName("InfoLog")[1].innerHTML = S_Response;

            document.getElementsByName("PayInfo")[0].value = "";
            document.getElementsByName("PayInfo")[1].value = "";
        }
    };

document.getElementsByClassName("InfoLog")[1].innerHTML = '<h4 style = "color:purple">Please Wait..., while we process your operation</h4>';
XmlHttp.open("POST", "../../Server/PayUser.php", true);
XmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
XmlHttp.send("x=" + DbParam);

return false;
}
