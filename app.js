const gameOptions = ['rock', 'paper', 'scissors'];

// this function picks a random choice from gameOPtions variable
function getRandomItem(gameOptions) {
  return gameOptions[Math.floor(Math.random() * gameOptions.length)];
}

const computerSelection = getRandomItem(gameOptions);
let playerSelection;
let playerScore = 0;
let compScore = 0;
let ties = 0;

function comparePlayerAndCompSelection(playerSelection, computerSelection) {
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


function playRound() {
  for (let round = 0; round <= 2; round += 1) {

    const rockBtn = document.getElementsByClassName('rock');
    rockBtn[0].addEventListener('click', selectRock);

    const paperBtn = document.getElementsByClassName('paper');
    paperBtn[0].addEventListener('click', selectPaper);

    const scissorsBtn = document.getElementsByClassName('scissors');
    scissorsBtn[0].addEventListener('click', selectScissors);
  }
}


function selectRock(){
  playerSelection = 'rock';
  console.log(playerSelection)

  const compareResult = comparePlayerAndCompSelection(playerSelection, computerSelection);
  console.log(compareResult);
}

function selectPaper(){
  playerSelection = 'paper';
  console.log(playerSelection)

  const compareResult = comparePlayerAndCompSelection(playerSelection, computerSelection);
  console.log(compareResult);
}

function selectScissors(){
  playerSelection = 'scissors';
  console.log(playerSelection)

  const compareResult = comparePlayerAndCompSelection(playerSelection, computerSelection);
  console.log(compareResult);
}

function displayWinner() {
  if (playerScore > compScore) {
    console.log(`You Win! \n Your Score: ${playerScore} \n computer score: ${compScore} \n how many ties you had: ${ties}`);
  } else if (compScore > playerScore) {
    console.log(`Computer Wins! \n Your Score: ${playerScore} \n Computer score: ${compScore} \n how many ties you had: ${ties}`);
  } else {
    console.log(`"it's a tie \n Your Score: ${playerScore} \n computer score ${compScore}  \n how many ties you had: ${ties}`);
  }
}

const gameResult = document.querySelector('.result');
const gameScore = document.createElement('p');
gameResult.appendChild('gameScore')

playRound()
