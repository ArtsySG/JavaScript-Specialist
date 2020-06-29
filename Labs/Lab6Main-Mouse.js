window.onload = function()
{
    var randomBox1 = document.getElementById('eventBox1');
    var randomBox2 = document.getElementById('eventBox2');

    randomBox2.onmouseover = function()
    {
        alert("You hovered over the red box!");
    }
    randomBox1.onclick = function(e)
    {
        alert("Coordinates: " + e.clientX + ", " + e.clientY);
    }
    window.onkeypress = function(e)
    {
        alert(e);
    }
}