window.onload = function()
{
    document.getElementById("httpBtn").addEventListener('click', renderText)
}
function renderText()
{
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
    {
        xhttp.open("GET", "Lab13Text-Services.txt", true) = xhttp.openxhttp.open("POST", "Lab13NewText-Services.txt", true);
        //txtDoc = xhttp.responseText;
    xhttp.send();
    };
};