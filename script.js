let humanScore = 0;
let computerScore = 0;

const rockButton = document.querySelector(".rockCard");
rockButton.addEventListener("click", () => playRound("ROCK"));
const paperButton = document.querySelector(".paperCard");
paperButton.addEventListener("click", () => playRound("PAPER"));
const scissorButton = document.querySelector(".scissorCard");
scissorButton.addEventListener("click", () => playRound("SCISSOR"));

const displayMyScore = document.querySelector("#userScore");
let myScoreDisplay = document.createElement("span");
myScoreDisplay.textContent = humanScore;
displayMyScore.appendChild(myScoreDisplay);

const displayComputerScore = document.querySelector("#computerScore");
let computerScoreDisplay = document.createElement("span");
computerScoreDisplay.textContent = computerScore;
displayComputerScore.appendChild(computerScoreDisplay);

function getComputerChoice(){
    let choice =Math.random();
    if (choice < 1/3){
        return "ROCK";
    }
    else if (choice < 2/3){
        return "PAPER";
    }
    else return "SCISSOR";
}

function playRound(humanChoice){
    let winner;
    let computerChoice = getComputerChoice();
    switch (humanChoice){
        case 'ROCK':
            if ( computerChoice == "SCISSOR"){
                winner = "Human";
            }
            else if ( computerChoice == "PAPER"){
                winner = "Computer";
            }
            else {
                winner = "";
            }
            break;

        case 'PAPER':
            if ( computerChoice == "ROCK"){
                winner = "Human";
            }
            else if ( computerChoice == "SCISSOR"){
                winner = "Computer";
            }
            else {
                winner = "";
            }
            break;

        case 'SCISSOR':
            if ( computerChoice == "PAPER"){
                winner = "Human";
            }
            else if ( computerChoice == "ROCK"){
                winner = "Computer";
            }
            else {
                winner = "";
            }
            break;
    }
 
    if (winner == "Human"){
        humanScore++;
        myScoreDisplay.textContent = humanScore;
        console.log("win");
        checkWinner(winner);
    }
    else if (winner == "Computer"){
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
        console.log("lose");
        checkWinner(winner);
    }
    else {
        console.log("tie");
    }
}

function checkWinner(winner){
    if (humanScore == 5 || computerScore == 5){
        alert(`${winner} is the final winner!`);
        humanScore = 0;
        myScoreDisplay.textContent = humanScore;
        computerScore = 0;
        computerScoreDisplay.textContent = computerScore;
    }
}