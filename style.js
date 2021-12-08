//Creates variable to store scores

let computerScore = 0;
let playerScore = 0;
let draws = 0;

// Creates computers choice for Rock, Paper, Scissors

function computerPlay(){
    let choices = ["Rock", "Paper", "Scissors"];
    let randomNum = Math.floor(Math.random()*choices.length);
    let computerChoice =  choices[randomNum];
    return computerChoice;
}

//Creates user choice for RPS

function playerChoice(){
    let choice = prompt("Choose Rock, Paper or Scissors:");
    return choice;
}

// Creates function to play a game of RPS and add counts to scores

function rpsGame(){
    let playerSelection = playerChoice();
    let computerSelection = computerPlay();
    if (playerSelection.toUpperCase() === "ROCK"){
        if (computerSelection.toUpperCase() ==="ROCK"){
            draws = ++draws;
            console.log("Draw!");
        } else if (computerSelection.toUpperCase() === "PAPER"){
            computerScore = ++computerScore;
            console.log("You lose!");
        } else {
            playerScore = ++playerScore;
            console.log("You won!");
        }
    } else if (playerSelection.toUpperCase() === "PAPER"){
        if (computerSelection.toUpperCase() ==="ROCK"){
            playerScore = ++playerScore;
            console.log("You won!");
        } else if (computerSelection.toUpperCase() === "PAPER"){
            draws = ++draws;
            console.log("Draw!");
        } else {
            computerScore = ++computerScore;
            console.log("You lose!");
        }
    } else if (playerSelection.toUpperCase() === "SCISSORS"){
        if (computerSelection.toUpperCase() ==="ROCK"){
            computerScore = ++computerScore;
            console.log("You lose!");
        } else if (computerSelection.toUpperCase() === "PAPER"){
            playerScore = ++playerScore;
            console.log("You won!");
        } else {
            draws = ++draws;
            console.log("Draw!");
        }

    } else{
        return("IDK what happened, lemme find out");
    }
}

//Game function that runs RPS game until a user/computer score of 5 is obtained

function game(){
    while (true){
    if (playerScore < 5 && computerScore < 5){
        rpsGame();
    } else if (playerScore === 5){
        console.log("You are pretty good at this, you won five times!");
        console.log("Wins: " + playerScore);
        console.log("Loses: " + computerScore);
        console.log("Draws: " + draws);
        break;
    } else if (computerScore === 5){
        console.log("You've lost five times already! Try another game!");
        console.log("Wins: " + playerScore);
        console.log("Loses: " + computerScore);
        console.log("Draws: " + draws);
        break;
    } else{
        console.log("I'm not sure who won...")
        break;
    }
}
}