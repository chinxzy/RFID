function TravelHistory() {
    var Obj, DbParam, XmlHttp;

    Obj = {
        "UserID": "Empty"
    };

    DbParam = JSON.stringify(Obj);
    XmlHttp = new XMLHttpRequest();

    XmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            S_Response = JSON.parse(this.responseText);
            document.getElementById("TravelHistoryTable").innerHTML = "";
            for (var i = 0; i < S_Response.length; i++)
            {
                document.getElementById("TravelHistoryTable").innerHTML += '<div class="col-12 menu">' +
                                                                               ' <div class="col-12"><h5>' + S_Response[i]['Route'] + '</h5></div>' +
                                                                                '<div class="col-9 col-md-9 col-lg-9 col-sm-9"><p>' + S_Response[i]['TimeStamp'] + '</p></div>' +
                                                                                '<div class="col-3 col-md-3 col-lg-3 col-sm-3"><a href="history_main.html">></a></div>' +
                                                                                '<div class="col-12"><p><b>FINISHED</b></p></div>' +
                                                                            '</div>';
            }
        }
    };

    XmlHttp.open("POST", "../Server/FetchTravelHistory.php", true);
    XmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    XmlHttp.send("x=" + DbParam);
}

function BalanceOnLoad()
{
    var Obj, DbParam, XmlHttp;

    DbParam = JSON.stringify(Obj);
    XmlHttp = new XMLHttpRequest();

    XmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            S_Response = JSON.parse(this.responseText);
            document.getElementById("AcctBalance").innerHTML = " " + S_Response['Balance'];
        }
    };
    XmlHttp.open("POST", "../Server/ProfileOnLoad.php", true);
    XmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    XmlHttp.send("x=" + DbParam);
}

function ProfileOnLoad()
{
    ProfileTravelHistory();

    var Obj, DbParam, XmlHttp;

    DbParam = JSON.stringify(Obj);
    XmlHttp = new XMLHttpRequest();

    XmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            S_Response = JSON.parse(this.responseText);

            document.getElementById("HFL").innerHTML = S_Response["FirstName"] + " " + S_Response["LastName"];
            document.getElementById("HID").innerHTML = S_Response["ID"];
            document.getElementById("home").innerHTML =   '<div class="row">' + 
                                                            '<div class="col-md-6">' +
                                                                '<label>User Id</label>' +
                                                            '</div>' +
                                                            '<div class="col-md-6">' + 
                                                                '<p>' + S_Response["ID"] +'</p>' +
                                                            '</div>' +
                                                        '</div>' +
                                                        '<div class="row">' +
                                                            '<div class="col-md-6">' +
                                                                '<label>Name</label>' +
                                                            '</div>' +
                                                            '<div class="col-md-6">' +
                                                                '<p>' + S_Response["FirstName"] + ' ' + S_Response["LastName"] + '</p>' +
                                                            '</div>' +
                                                        '</div>' +
                                                        '<div class="row">' +
                                                            '<div class="col-md-6">' +
                                                               ' <label>Email</label>' +
                                                            '</div>' +
                                                            '<div class="col-md-6">' +
                                                                '<p>' + S_Response["Email"] + '</p>' +
                                                            '</div>' +
                                                        '</div>' +
                                                        '<div class="row">' +
                                                            '<div class="col-md-6">' +
                                                                '<label>Phone</label>' +
                                                            '</div>' +
                                                            '<div class="col-md-6">' +
                                                                '<p>' + S_Response['Phone'] + '</p>' +
                                                            '</div>' +
                                                        '</div>' ;
        }
    };
    XmlHttp.open("POST", "../Server/ProfileOnLoad.php", true);
    XmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    XmlHttp.send("x=" + DbParam);
}

function ProfileTravelHistory() {
    var Obj, DbParam, XmlHttp;

    Obj = {
        "UserID": "Empty"
    };

    DbParam = JSON.stringify(Obj);
    XmlHttp = new XMLHttpRequest();

    XmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {

            S_Response = JSON.parse(this.responseText);
            document.getElementById("TravelHistoryTable").innerHTML = "";
            for (var i = 0; i < S_Response.length; i++)
            {
              document.getElementById("TravelHistoryTable").innerHTML += '<a href="">' + S_Response[i]['Route'] + '</a><br />';
            }
        }
    };

    XmlHttp.open("POST", "../Server/FetchTravelHistory.php", true);
    XmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    XmlHttp.send("x=" + DbParam);
}

function LoginBouncer() {
    var Obj, DbParam, XmlHttp;

    XmlHttp = new XMLHttpRequest();

    XmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            S_Response = JSON.parse(this.responseText);
            if (!S_Response) {
                window.location.href = "index.html";
            }
        }
    };

    XmlHttp.open("POST", "../Server/LoginSessionCheck.php", true);
    XmlHttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    XmlHttp.send("x=" + DbParam);

    return false;
}

LoginBouncer();