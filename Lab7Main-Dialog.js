window.onload = function()
{
    document.getElementById('confirmButton').addEventListener('click', runConfirm);
    document.getElementById('nameButton').addEventListener('click', runName);
}
function runConfirm()
{
    var message = confirm("Pick an option:");
    if(message)
        {
            message = "You pressed OK";
        }
    else
        {
            message = "You pressed Cancel";
        }
    document.getElementById('text').innerHTML = message;
}
function runName()
{
    var name = prompt("Type your name.");
    document.getElementById('textName').innerHTML = "Your name is " + name;
}