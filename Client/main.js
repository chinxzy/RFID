var isHidden = false;
var Amount;

function ShowAmount (){
    if (!isHidden) {
    Amount = document.getElementById("AcctBalance").innerHTML;
    document.getElementsByClassName("ShowBalance")[0].innerHTML = "Show Balance";
    document.getElementById("AcctBalance").innerHTML = "--.--";
    isHidden = true;
} else {
    document.getElementsByClassName("ShowBalance")[0].innerHTML = "Hide Balance";
    document.getElementById("AcctBalance").innerHTML = Amount;
    isHidden = false;
}

}

