let humanScore = 0;
let computerScore = 0;
playGame(humanScore, computerScore);

function getComputerChoice(){
    let choice = Math.floor(Math.random() * 10);
    if (choice < 1/3){
        return "ROCK";
    }
    else if (choice < 2/3){
        return "PAPER";
    }
    else return "SCISSOR";
}

function getHumanChoice(){
    return prompt("Enter 'rock', 'paper', or 'scissor': ");
}

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toUpperCase();
    let winner;

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
    return winner;
}

function playGame(humanScore, computerScore){
    let result;
    let humanChoice = getHumanChoice();
    let computerChoice =getComputerChoice();
    result = playRound(humanChoice, computerChoice);
    console.log(`Your choice: ${humanChoice}`);
    console.log(`Computer choice: ${computerChoice}`);
    if (result == ""){
        console.log("This round is a tie!");
    }
    else if (result == "Human") {
        console.log (`${humanChoice} beats ${computerChoice}.`);
        console.log ("You are the winner for this round.")
        humanScore++;
    }
    else{
        console.log (`${computerChoice} beats ${humanChoice}.`);
        console.log ("Computer is the winner for this round.")
        computerScore++;
    }   
    

    if (humanScore > computerScore){
        console.log("Congratulation, you are the final winner!");
    }
    else if (computerScore > humanScore){
        console.log("Computer is the final winner.");
    }
    else{
        console.log("The game ends with a tie.");
    }
    console.log("\n\n");
}