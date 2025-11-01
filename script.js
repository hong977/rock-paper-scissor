function getComputerChoice(){
    let num = Math.random();
    let boundary1 = 1/3;
    let boundary2 = 2/3;

    if (num < boundary1){
        return 'ROCK';
    }
    else if (num < boundary2){
        return 'PAPER';
    }
    else {
        return 'SCISSOR';
    }
}

function getHumanChoice(){
    return prompt("Enter rock, paper, or scissor: ");
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toUpperCase();
    console.log("Computer: " + computerChoice);
    console.log("You: " + humanChoice);
    let winner;
    let won;
    
    switch(humanChoice){
        case "ROCK":
            if (computerChoice == "PAPER"){
                winner = "computer";
                won = -1;
            }
            else if (computerChoice == "SCISSOR"){
                winner = "human";
                won = 1;
            }
            else{
                winner = "tie";
                won = 0;
            }
            break;

        case "PAPER":
            if (computerChoice == "SCISSOR"){
                winner = "computer";
                won = -1;
            }
            else if (computerChoice == "ROCK"){
                winner = "human";
                won = 1;
            }
            else{
                winner = "tie";
                won = 0;
            }
            break;

        case "SCISSOR":
            if (computerChoice == "ROCK"){
                winner = "computer";
                won = -1;
            }
            else if (computerChoice == "PAOER"){
                winner = "human";
                won = 1;
            }
            else{
                winner = "tie";
                won = 0;
            }
            break;
        
        default:
            break;
    }

    if (won == -1){
        console.log ("Computer won, " + computerChoice + " beats " + humanChoice + "!");
    }
    else if (won == 1){
        console.log ("You won, " + humanChoice + " beats " + computerChoice + "!");
    }
    else{
        console.log ("This round is a tie.");
    }

    return winner;
}

function playGame(humanScore, computerScore){
    do{
        switch(playRound(getHumanChoice(), getComputerChoice())){
            case "computer":
                computerScore ++;
                break;
            case "human":
                humanScore ++;
                break;
            case "tie":
                break;
        }
    }while (humanScore < 5 && computerScore < 5);

    let finalWinner;
    if (computerScore > humanScore){
        finalWinner = "Computer";
    }
    else {
        finalWinner = "You";
    }

    console.log (finalWinner + " is/are the final winner!");

}

let humanScore = 0;
let computerScore = 0;
playGame(humanScore, computerScore);