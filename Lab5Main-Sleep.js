window.onload = function()
{
    document.getElementById('hoursButton').addEventListener('click', startCheckHours)
    
    document.getElementById('subButton').addEventListener('click', startSubtract)
}
function startCheckHours()
{
    var hoursSlept = document.getElementById('hoursInput').value;
    checkHours(hoursSlept);
}
function checkHours(hoursSlept)
{
    if(hoursSlept >= 8)
        {
            alert("You're getting plenty of sleep!")
        }
    else
        {
            alert("Get some more sleep!")
        }
}

function startSubtract()
{
    var subOne = document.getElementById('subInputOne').value;
    var subTwo = document.getElementById('subInputTwo').value;
    subtract(subOne, subTwo);
}
function subtract(subOne,subTwo)
{
    var answer = subOne - subTwo;
    alert(answer);
}