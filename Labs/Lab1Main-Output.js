window.onload = function()
{
    document.getElementById('consoleButton').addEventListener('click', consoleRespond);
    document.getElementById('browserButton').addEventListener('click', browserRespond);
    document.getElementById('alertButton').addEventListener('click', alertRespond);
}
function consoleRespond(e)
{
    console.log("Here's a console message!");
}
function browserRespond(e)
{
    document.write("Here's a browser message!");
}
function alertRespond(e)
{
    alert("Here's an alert message!");
}