window.onload = function()
{
    document.getElementById('findNameBtn').addEventListener('click', lookForName);
}
function lookForName()
{
    var name = "Autumn";
    var counter = [];
    var input = document.getElementById('findNameBox').value;
    var out = "";       

    for (var i = 0; i < input.length; i++)
    {
        if(input[i] == 'A')
        {
            for (var j = 0; j < name.length; j++)
            {
                counter.push(input[j]);
            }
            break;
        }
    }
    if (counter.length == 0)
    {
        alert("Your name wasn't found.")
    }
    else
    {
        
        for (var x = 0;  x < counter.length; x++)
            {
                out += counter[x];
            };
        console.log(out);
        document.getElementById('result').innerHTML = "Your name is: " + out;
    }
}