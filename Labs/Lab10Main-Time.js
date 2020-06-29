window.onload = function()
{
    document.getElementById('checkDay').addEventListener('click', runIsWeekend);
    document.getElementById('checkMonth').addEventListener('click', runHowMany);
}
function runIsWeekend()
{
    var dateToCheck = document.getElementById('inputDay').value;
    isWeekend(dateToCheck);
}
function isWeekend(userDate)
{
    var d = new Date(userDate);
    if(d.getDay() == 6 || d.getDay() == 0)
       {
            alert("It's the weekend!");
       }
    else
        {
            alert("Not the weekend...");
        }
}
function runHowMany()
{
    var monthToCheck = document.getElementById('inputDay').value;
    howMany(monthToCheck);
}
function howMany(userMonth)
{
    var d = new Date(userMonth);
    var newDate = (parseFloat(d.getMonth())+1);
    var firstDay = new Date(d.getFullYear(),newDate,1);
    var lastDay = new Date(firstDay - 1)
    document.getElementById('result').innerHTML = lastDay.getDate();
}