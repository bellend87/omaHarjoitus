var nimi = document.getElementById("omanimibtn");
nimi.onclick = function() {
    document.querySelector(".active").classList.remove("active")
    document.querySelector("#omanimisivu").classList.add("active")
}
var osoite = document.getElementById("osoitebtn");
osoite.onclick = function() {
    document.querySelector(".active").classList.remove("active")
    document.querySelector("#osoitesivu").classList.add("active")
}
var vaimo = document.getElementById("vaimonnimibtn");
vaimo.onclick = function() {
    document.querySelector(".active").classList.remove("active")
    document.querySelector("#vaimonnimisivu").classList.add("active")
}