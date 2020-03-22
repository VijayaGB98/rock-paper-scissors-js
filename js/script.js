const cpuScore = document.querySelector('.cpuScore');
const roundNumber = document.querySelector('.roundNumber');
const yourScore = document.querySelector('.yourScore');
const submitThrow = document.querySelector('.submitThrow');
const result = document.querySelector('.result');
const finalResult = document.querySelector('.finalResult');
const myDiv = document.querySelector('.container');
let resetButton;
var cpuChoiceList = [
    'Rock',
    'Scissors',
    'Paper'
];
var currentRound = 0;
var finalRound = 5;
var cpuScoreValue = 0;
var userScoreValue = 0;
submitThrow.addEventListener('click',checkThrow);
function checkThrow(){
    currentRound+=1;
    roundNumber.innerHTML = currentRound;
    var choice = document.querySelector('input[name = choice]:checked').value;
    //alert("You chose "+choice);
    var cpuChoice = cpuChoiceList[Math.floor(Math.random()*cpuChoiceList.length)];
    //alert("CPU chose "+cpuChoice);
    switch(choice){
        case 'Rock':
            if (cpuChoice === 'Paper'){
                cpuScoreValue+=1;
                result.innerHTML = "You lose this round! CPU chose Paper. You chose Rock.";
                cpuScore.innerHTML = cpuScoreValue;
            }else if(cpuChoice === 'Scissors'){
                userScoreValue+=1;
                result.innerHTML = "You win this round! CPU chose Scissors. You chose Rock.";
                yourScore.innerHTML = userScoreValue;
            }else{
                result.innerHTML = "It's a tie! CPU and user threw Rock!";
            }
            break;
        case 'Scissors':
            if (cpuChoice === 'Rock'){
                cpuScoreValue+=1;
                result.innerHTML = "You lose this round! CPU chose Rock. You chose Scissors.";
                cpuScore.innerHTML = cpuScoreValue;
            }else if(cpuChoice ==='Paper'){
                userScoreValue+=1;
                result.innerHTML = "You win this round! CPU chose Paper. You chose Scissors.";
                yourScore.innerHTML = userScoreValue;
            }else{
                result.innerHTML = "It's a tie! CPU and user threw Scissors!";
            }
            break;
        case 'Paper':
            if(cpuChoice ==='Scissors'){
                cpuScoreValue+=1;
                result.innerHTML = "You lose this round! CPU chose Scissors. You chose Paper.";
                cpuScore.innerHTML = cpuScoreValue;
            }else if(cpuChoice ==='Rock'){
                userScoreValue+=1;
                result.innerHTML = "You win this round! CPU chose Rock. You chose Paper.";
                yourScore.innerHTML = userScoreValue;
            }else{
                result.innerHTML = "It's a tie! CPU and user threw Paper!";
            }
            break;
        default:
            alert("There's an error!");
    }
    if (currentRound===5){
        setGameOver();
    }
}
function setGameOver(){
    if(cpuScoreValue>userScoreValue){
        finalResult.innerHTML = "CPU wins!";
    }else if(cpuScoreValue<userScoreValue){
        finalResult.innerHTML = "You win!";
    }else{
        finalResult.innerHTML = "It's a tie!";
    }
    submitThrow.disabled = true;
    resetButton = document.createElement('button');
    resetButton.textContent = "Play Again";
    resetButton.className = "submitThrow";
    resetButton.style["margin-right"]= "75px";
    myDiv.appendChild(resetButton);
    resetButton.addEventListener('click',resetGame);
}
function resetGame(){
    resetButton.parentNode.removeChild(resetButton);
    result.innerHTML = "";
    finalResult.innerHTML = "";
    submitThrow.disabled = false;
    currentRound = 0;
    cpuScoreValue = 0;
    userScoreValue = 0;
    yourScore.innerHTML="0";
    cpuScore.innerHTML="0";
    roundNumber.innerHTML = "0";
}