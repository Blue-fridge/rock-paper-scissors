const gameChoice = ["rock", "paper", "scissors"];

//this function picks a random choice from gameChoice variable, the code for computer the play the game
function computerPlay(randomChoice){
    return randomChoice[Math.floor(Math.random() * randomChoice.length)];
};

const result = computerPlay(gameChoice);
const computerSelection = result;

//this function plays a single round of rock, paper, scissor
function playRound(playerSelection, computerSelection){
    // scissors beats paper
    if (computerSelection == "scissors" && playerSelection == "paper" ){
        return "computer won, You loose! scissor beats paper";
    } else if (playerSelection == "scissors" && computerSelection == "paper"){
        return "player won, scissor beats paper";
    } else if (playerSelection == "paper" && computerSelection == "paper"){
        return "tie";
    } else if (playerSelection == "scissors" && computerSelection == "scissors"){
        return "tie";
    } 
    // paper beats rock
    else if (computerSelection == "paper" && playerSelection == "rock" ){
        return "computer won, You loose! paper beats rock";
    } else if (playerSelection == "paper" && computerSelection == "rock"){
        return "player won, paper beats rock";
    } else if (playerSelection == "paper" && computerSelection == "paper"){
        return "tie";
    } else if (playerSelection == "rock" && computerSelection == "rock"){
        return "tie";
    }
    // rock beats scissor
    else if (computerSelection == "rocks" && playerSelection == "scissors" ){
        return "computer won, You loose! rock beats scissors";
    } else if (playerSelection == "rock" && computerSelection == "scissors"){
        return "player won, rock beats scissors";
    } else if (playerSelection == "rock" && computerSelection == "rock"){
        return "tie";
    } else if (playerSelection == "scissors" && computerSelection == "scissors"){
        return "tie";
    } else {
        return "somethings wrong";
    }   
};

function game(){
    for (let round = 0; round <= 4; ++round){
        const playerSelection = prompt("rock, paper or scissors");
        playerSelection.toLocaleLowerCase
        playRound(playerSelection, computerSelection);
    }
};

game();
