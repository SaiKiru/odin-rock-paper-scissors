let playerScore;
let computerScore;
let hasEnded = false;

let scoreboard = document.querySelector('#scoreboard');
let mainMessageLabel = document.querySelector('#main-message');
let subMessageLabel = document.querySelector('#sub-message');
let cards = document.querySelectorAll('.card-body');

cards.forEach(card => {
  let type = card.children.namedItem('label').textContent;
  console.log(type);

  card.addEventListener('click', event => {
    playRound(type);
  });
});

const Results = {
  PLAYER_WIN: 0,
  COMPUTER_WIN: 1,
  TIE: 2
};

function toTitleCase(string) {
  return `${string.slice(0, 1).toUpperCase()}${string.slice(1).toLowerCase()}`;
}

function computerPlay() {
  return ['Rock', 'Paper', 'Scissors'][Math.floor(Math.random() * 3)];
}

function playRound(playerChoice) {
  if (hasEnded) return;

  let computerChoice = computerPlay();

  if (
    playerChoice === 'Rock' && computerChoice === 'Scissors' ||
    playerChoice === 'Paper' && computerChoice === 'Rock' ||
    playerChoice === 'Scissors' && computerChoice === 'Paper'
  ) {
    setScore(playerScore + 1, computerScore);
    setMessage('You won!', `${playerChoice} beats ${computerChoice}`);
  } else if (
    playerChoice === 'Rock' && computerChoice === 'Paper' ||
    playerChoice === 'Paper' && computerChoice === 'Scissors' ||
    playerChoice === 'Scissors' && computerChoice === 'Rock'
  ) {
    setScore(playerScore, computerScore + 1);
    setMessage('You lost!', `${computerChoice} beats ${playerChoice}`);
  } else {
    setMessage('It\'s a tie!');
  }

  let gameWinner = checkGameWinner();
  if (gameWinner != null) {
    hasEnded = true;

    setMessage(
      'Game End!',
      `${gameWinner === Results.PLAYER_WIN
        ? `You` : `Computer`} won this round!`
    );
  }
}

function setScore(newPlayerScore, newComputerScore) {
  playerScore = newPlayerScore;
  computerScore = newComputerScore;

  scoreboard.textContent = `${newPlayerScore} : ${newComputerScore}`;
}

function setMessage(mainMessage, subMessage = '') {
  mainMessageLabel.textContent = mainMessage;
  subMessageLabel.textContent = subMessage;
}

function checkGameWinner() {
  if (playerScore >= 5) return Results.PLAYER_WIN;
  else if (computerScore >= 5) return Results.COMPUTER_WIN;
}

function newGame() {
  playerScore = 0;
  computerScore = 0;
  hasEnded = false;
}

newGame();
