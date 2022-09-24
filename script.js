let choices = ['Rock', 'Paper', 'Scissors'];

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {

    // Wins
    if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
        return 'You Win! Rock beats Scissors';
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        return 'You Win! Paper beats Rock';
    }
    else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
        return 'You Win! Scissors beats Paper';
    }

    // Draws
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return `Draw! ${playerSelection} and ${computerSelection} are the same choices`;
    }

    // Losses
    if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
        return 'You Lose! Rock beats Scissors';
    }
    else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        return 'You Lose! Paper beats Rock';
    }
    else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
        return 'You Lose! Scissors beats Paper';
    }
}
const playerSelection = 'rock';
const computerSelection = getComputerChoice();

function game() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound());
    }
}

