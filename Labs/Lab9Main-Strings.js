window.onload = function()
{
    document.getElementById('capitalizeBtn').addEventListener('click', capWord)
     document.getElementById('alphabetizeBtn').addEventListener('click', alphWord)
}
function capWord()
{
    var sentence = document.getElementById('sentenceInput').value;
    var newSentence = sentence.charAt(0).toUpperCase() + sentence.slice(1);
    document.getElementById('result').innerHTML = newSentence;
}
function alphWord()
{
    var sentence = document.getElementById('sentenceInput').value;
    var arraySentence = sentence.split(" ");
    var sortedArraySentence = arraySentence.sort();
        document.getElementById('result').innerHTML = sortedArraySentence;

}