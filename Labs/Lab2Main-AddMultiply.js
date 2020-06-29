window.onload = function()
{
    document.getElementById('addingButton').addEventListener('click', addRespond);
    document.getElementById('multiplyingButton').addEventListener('click', multiplyRespond);
};
function addRespond(e)
{
    var num1 = parseFloat(document.getElementById('inputOne').value);
    var num2 = parseFloat(document.getElementById('inputTwo').value);
    var addAnswer = num1 + num2;
    alert(addAnswer);
};
function multiplyRespond(e)
{
    var num3 = parseFloat(document.getElementById('inputThree').value);
    var num4 = parseFloat(document.getElementById('inputFour').value);
    var multiplyAnswer = num3 * num4;
    alert(multiplyAnswer);
};