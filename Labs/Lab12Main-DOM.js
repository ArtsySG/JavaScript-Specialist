function purpleWords()
{
    var boldWords = document.getElementsByTagName('strong');
    for (var x = 0; x < boldWords.length; x++)
        {
            boldWords[x].style.color = "purple";
            boldWords[x].style.backgroundColor = "lavender";
        }
}
function returnColor()
{
    var boldWords = document.getElementsByTagName('strong');
    for (var x = 0; x < boldWords.length; x++)
        {
            boldWords[x].style.color = "black";
            boldWords[x].style.background = "none";
        }
}
