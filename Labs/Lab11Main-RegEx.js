window.onload = function()
{
    document.getElementById('checkBtn').addEventListener('click', respond);
    document.getElementById('capBtn').addEventListener('click', capRespond)
}
function respond()
{
    var sentence = document.getElementById('sentenceInput').value;
    document.getElementById('result').innerHTML = "<br/>" + sentence.match(/[aeiouy]/gi).length + " vowels <br/><br/>";
}
function capRespond()
{
    var sentence = document.getElementById('sentenceInput').value;
    if(sentence[0].search(/[A-Z]/) == 0)
    {
        document.getElementById('capResult').innerHTML = "<br/>Yes, it is.";
    }
    else 
    {
        document.getElementById('capResult').innerHTML = "<br/>No, it isn't.";
    }
}