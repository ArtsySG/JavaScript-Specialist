window.onload = function() 
        {
            document.getElementById('touchTarget').addEventListener('click',respond);
        }
        function respond(e)
        {
            document.getElementById('touchTarget').style.display =  "none";
        }
        {
            document.getElementById('myButton').addEventListener('click',respondAlert);
        }
         function respondAlert(e)
        {
            alert("Thanks for clicking!");
        }