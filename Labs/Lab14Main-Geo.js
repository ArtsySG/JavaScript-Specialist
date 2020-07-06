window.onload = function ()
{
    document.getElementById('getLocationBtn').addEventListener('click', grabLocation);
}
function grabLocation()
{
    navigator.geolocation.getCurrentPosition(showGoogleLink, error, [1, 1, true]);
}
function error()
{
    alert("There was an error.");
}
function showGoogleLink(position)
{
    var myLocation = document.getElementById('mapsLink');
    myLocation.innerHTML = "<a href = https://www.google.com/maps/@" + position.coords.latitude + "," +  position.coords.longitude + ">CLICK ME</a>";
}