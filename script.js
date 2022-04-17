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

function playRound(playerSelection, computerSelection) {
  let playerChoice = toTitleCase(playerSelection);
  let computerChoice = toTitleCase(computerSelection);

  if (playerChoice === 'Rock' && computerChoice === 'Scissors' ||
    playerChoice === 'Paper' && computerChoice === 'Rock' ||
    playerChoice === 'Scissors' && computerChoice === 'Paper') {
    return `You won! ${playerChoice} beats ${computerChoice}`;

  } else if (
    playerChoice === 'Rock' && computerChoice === 'Paper' ||
    playerChoice === 'Paper' && computerChoice === 'Scissors' ||
    playerChoice === 'Scissors' && computerChoice === 'Rock') {
    return `You lost! ${computerChoice} beats ${playerChoice}`;
  }

  return "It's a tie!";
}

function checkWinner(resultStr) {
  if (/won/.test(resultStr)) return Results.PLAYER_WIN;
  else if (/lost/.test(resultStr)) return Results.COMPUTER_WIN;
  return Results.TIE;
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt('Rock Paper Scissors! Choose your move!');
    let computerSelection = computerPlay();
    let resultStr = playRound(playerSelection, computerSelection);
    let result = checkWinner(resultStr);

    if (result === Results.PLAYER_WIN) playerScore++;
    else if (result === Results.COMPUTER_WIN) computerScore++;

    console.log(resultStr);
  }

  console.log(`Final Score: ${playerScore}-${computerScore}`);

  if (playerScore > computerScore) {
    console.log('You win this round!');
  } else if (playerScore < computerScore) {
    console.log('Computer wins this round!');
  } else {
    console.log("It's a tie!");
  }
}

game();
