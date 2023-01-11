let choices = ['Rock', 'Paper', 'Scissors'];
let playerWins = 0;
let computerWins = 0;
let running = true;

function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection) {
    const computerSelection = getComputerChoice();

    // Wins
    if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'scissors') {
        playerWins++;
        return 'You Win! Rock beats Scissors';
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'rock') {
        playerWins++;
        return 'You Win! Paper beats Rock';
    } else if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'paper') {
        playerWins++;
        return 'You Win! Scissors beat Paper';
    }

    // Draws
    if (playerSelection.toLowerCase() === computerSelection.toLowerCase()) {
        return `Draw! Both chose ${playerSelection}`;
    }

    // Losses
    if (playerSelection.toLowerCase() === 'scissors' && computerSelection.toLowerCase() === 'rock') {
        computerWins++;
        return 'You Lose! Rock beats Scissors';
    } else if (playerSelection.toLowerCase() === 'rock' && computerSelection.toLowerCase() === 'paper') {
        computerWins++;
        return 'You Lose! Paper beats Rock';
    } else if (playerSelection.toLowerCase() === 'paper' && computerSelection.toLowerCase() === 'scissors') {
        computerWins++;
        return 'You Lose! Scissors beat Paper';
    }
}

function declareWinner () {
    if (playerWins === 5) {
        playerWins = 0;
        computerWins = 0;
        return 'You Win';
    } else if (computerWins === 5) {
        playerWins = 0;
        computerWins = 0;
        return 'The Computer Wins!'
    }
}

// functioning the buttons
const result = document.querySelector('.results');
const score = document.querySelector('.score');
const winner = document.querySelector('.winner');

const rock = document.querySelector('.rock');
rock.addEventListener('click', () => {
    result.textContent = playRound('Rock');
    score.textContent = `${playerWins} - ${computerWins}`;
    winner.textContent = declareWinner();
});

const paper = document.querySelector('.paper');
paper.addEventListener('click', () => {
    result.textContent = playRound('Paper');
    score.textContent = `${playerWins} - ${computerWins}`;
    winner.textContent = declareWinner();
});

const scissors = document.querySelector('.scissors');
scissors.addEventListener('click', () => {
    result.textContent = playRound('Scissors');
    score.textContent = `${playerWins} - ${computerWins}`;
    winner.textContent = declareWinner();
});
