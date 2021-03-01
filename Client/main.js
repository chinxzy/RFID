var isHidden = false;
function ShowAmount (){
if (!isHidden) {
    document.getElementsByClassName("ShowBalance")[0].innerHTML = "Show Balance";
    document.getElementById("AcctBalance").innerHTML = "--.--";
    isHidden = true;
} else {
    document.getElementsByClassName("ShowBalance")[0].innerHTML = "Hide Balance";
    document.getElementById("AcctBalance").innerHTML = "00.00";
    isHidden = false;
}

}

