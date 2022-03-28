// Returns random weapon from array
function computerPlay() {
    const weapon = ['Rock', 'Paper', 'Scissors'];
    return weapon[Math.floor(Math.random() * weapon.length)];
}

const playGround = document.querySelector('.main');
const weaponBtn = playGround.querySelector('.weapon-btn');
const outcomeDisplay = document.querySelector('.outcome-display');

weaponBtn.addEventListener('click', (e) => {
    let playerPick = e.target;
    let playerSelection = playerPick.textContent;
    
    if (checkResult()) {
        checkTheWinner();
        return;
    }

    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    updateScore();
    updateDisplay();

    if (checkResult()) {
        checkTheWinner();
    }
})

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundOutcome = 'tie';
        outcomeDisplay.textContent = `It's a tie! ${playerSelection} is equal to ${computerSelection}`;
    }
    else if (
        playerSelection === 'Rock' && computerSelection === 'Scissors' ||
        playerSelection === 'Scissors' && computerSelection === 'Paper' ||
        playerSelection === 'Paper' && computerSelection === 'Rock'
    ) {
        roundOutcome = 'win';
        outcomeDisplay.textContent = `You won! ${playerSelection} beats ${computerSelection}`;
    }
    else if (
        computerSelection === 'Rock' && playerSelection === 'Scissors' ||
        computerSelection === 'Scissors' && playerSelection === 'Paper' ||
        computerSelection === 'Paper' && playerSelection === 'Rock'
    ) {
        roundOutcome = 'lose';
        outcomeDisplay.textContent = `You lost! ${computerSelection} beats ${playerSelection}`;
    }
}

let playerScore = 0;
let computerScore = 0;
let roundOutcome = '';

function updateScore() {
    if (roundOutcome === 'win') {
        playerScore++;
    }
    else if (roundOutcome === 'lose') {
        computerScore++;
    }
}

function checkResult() {
    return playerScore === 5 || computerScore === 5;
}

function checkTheWinner(winMsg, lossMsg) {
    if (playerScore > computerScore) {
        winMsg = window.confirm('You won the game!');
    }
    else {
        lossMsg = window.confirm('You lost the game!');
    }
    playAgain(winMsg, lossMsg);
}

const playerDisplay = document.querySelector('.player-score')
const computerDisplay = document.querySelector('.computer-score')

function updateDisplay() {
    playerDisplay.textContent = `Player: ${playerScore}`;
    computerDisplay.textContent = `Computer: ${computerScore}`;
}

function playAgain(w, l) {
    if (w === true || l === true) {
        playerScore = 0;
        computerScore = 0;
        roundOutcome = '';
        updateDisplay();
        outcomeDisplay.textContent = 'Choose your weapon!';
    }
}