let choices = ['Rock', 'Paper', 'Scissors'];
let playerWins = 0;
let computerWins = 0;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {

    // Wins
    if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
        playerWins++;
        return 'You Win! Rock beats Scissors';
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        playerWins++;
        return 'You Win! Paper beats Rock';
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
        playerWins++;
        return 'You Win! Scissors beats Paper';
    }

    // Draws
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return `Draw! ${playerSelection} and ${computerSelection} are the same choices`;
    }

    // Losses
    if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
        computerWins++;
        return 'You Lose! Rock beats Scissors';
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        computerWins++;
        return 'You Lose! Paper beats Rock';
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
        computerWins++;
        return 'You Lose! Scissors beats Paper';
    }
}

function game() {
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt('Choose Rock, Paper or Scissors');
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log(`${playerWins} - ${computerWins}`)
    }
}

game();
