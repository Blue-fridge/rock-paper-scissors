//this function picks a random choice from gameChoice variable
function computerPlay(randomChoice){
    return randomChoice[Math.floor(Math.random() * randomChoice.length)];
};

const gameChoice = ["rock", "paper", "scissors"];

const result = computerPlay(gameChoice);
console.log(result);
