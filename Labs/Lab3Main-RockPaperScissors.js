window.onload = function()
{
    document.getElementById('playButton').addEventListener('click', randomNumber);
}

function randomNumber()
{
    var playerChoiceVar = document.getElementById('playerChoice').value;
    var choiceNum = Math.random();
    console.log(choiceNum);
    
    switch(playerChoiceVar)
    {
        case "Rock":
            if(choiceNum <= .33)
                {
                    document.getElementById('result').innerHTML = "Tie!";
                    document.getElementById('compChoiceShow').innerHTML = "Rock";
                }
            if((choiceNum > .33) && (choiceNum <= .67))
                {
                    document.getElementById('result').innerHTML = "You Lose!";
                    document.getElementById('compChoiceShow').innerHTML = "Paper";
                }
            if(choiceNum > .67)
                {
                    document.getElementById('result').innerHTML = "You Win!";
                    document.getElementById('compChoiceShow').innerHTML = "Scissors";
                }
            break;
        case "Paper":
            if(choiceNum <= .33)
                {
                    document.getElementById('result').innerHTML = "You Win!";
                    document.getElementById('compChoiceShow').innerHTML = "Rock";
                }
            if((choiceNum > .33) && (choiceNum <= .67))
                {
                    document.getElementById('result').innerHTML = "Tie!";
                    document.getElementById('compChoiceShow').innerHTML = "Paper";
                }
            if(choiceNum > .67)
                {
                    document.getElementById('result').innerHTML = "You Lose!";
                    document.getElementById('compChoiceShow').innerHTML = "Scissors";
                }
            break;
        default:
            if(choiceNum <= .33)
                {
                    document.getElementById('result').innerHTML = "You Lose!";
                    document.getElementById('compChoiceShow').innerHTML = "Rock";
                }
            if((choiceNum > .33) && (choiceNum <= .67))
                {
                    document.getElementById('result').innerHTML = "You Win!";
                    document.getElementById('compChoiceShow').innerHTML = "Paper";
                }
            if(choiceNum > .67)
                {
                    document.getElementById('result').innerHTML = "Tie!";
                    document.getElementById('compChoiceShow').innerHTML = "Scissors";
                }
            break;
    }
}
