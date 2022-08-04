const gameOptions = ['rock', 'paper', 'scissors'];

// this function picks a random choice from gameOPtions variable
function getRandomItem(gameOptionsItem) {
  return gameOptionsItem[Math.floor(Math.random() * gameOptionsItem.length)];
}

const computerSelection = getRandomItem(gameOptions);
let playerScore = 0;
let compScore = 0;
let ties = 0;

function comparePlayerAndChoices(playerSelection, computerSelection) {
  // scissors beats paper
  if (playerSelection === 'scissors' && computerSelection === 'paper') {
    alert('You Won!, scissors beats paper');
    return playerScore += 1;
  } if (playerSelection === 'paper' && computerSelection === 'rock') {
    alert('You Won!, paper beats rock');
    return playerScore += 1;
  } if (playerSelection === 'paper' && computerSelection === 'rock') {
    alert('You Won!, paper beats rock');
    return playerScore += 1;
  } if (playerSelection === 'paper' && computerSelection === 'rock') {
    alert('You Won!, paper beats rock');
    return playerScore += 1;
  } if (playerSelection === 'rocks' && computerSelection === 'scissors') {
    alert('You Won!, rock beats scissors');
    return playerScore += 1;
  } if (playerSelection === 'rock' && computerSelection === 'scissors') {
    alert('You Won!, rock beats scissors');
    return playerScore += 1;
  } if (playerSelection === computerSelection) {
    alert('ties');
    ties += 1;
  } else {
    alert('Computer Won!');
    return compScore += 1;
  }
}

/*
function playGame() {
  for (let round = 0; round <= 2; round += 1) {
    const playerSelection = prompt('rock, paper or scissors?').toLocaleLowerCase();
    const comparionResult = comparePlayerAndChoices(playerSelection, computerSelection);
    alert(comparionResult);
  }
}
*/
function displayWinner() {
  if (playerScore > compScore) {
    alert(`You Win! \n Your Score: ${playerScore} \n computer score: ${compScore} \n how many ties you had: ${ties}`);
  } else if (compScore > playerScore) {
    alert(`Computer Wins! \n Your Score: ${playerScore} \n Computer score: ${compScore} \n how many ties you had: ${ties}`);
  } else {
    alert(`"it's a tie \n Your Score: ${playerScore} \n computer score ${compScore}  \n how many ties you had: ${ties}`);
  }
}

const btn = document.getElementsByClassName('rps-selection')
playGame();
displayWinner();
