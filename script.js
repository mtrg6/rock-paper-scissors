const playGround = document.querySelector('.main');
const weaponBtn = playGround.querySelector('.weapon-btn');
const outcomeDisplay = document.querySelector('.outcome-display');
const playerDisplay = document.querySelector('.player-score');
const computerDisplay = document.querySelector('.computer-score');
const playerWeaponSelection = document.querySelector('.player-weapon');
const computerWeaponSelection = document.querySelector('.computer-weapon');

let playerScore = 0;
let computerScore = 0;
let roundOutcome = '';

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
    displayWeaponChoice(playerSelection, computerSelection);

    if (checkResult()) {
        checkTheWinner();
    }
})

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundOutcome = 'tie';
        outcomeDisplay.textContent = `It's a tie! ${playerSelection} is equal to ${computerSelection}!`;
    }
    else if (
        playerSelection === 'Rock' && computerSelection === 'Scissors' ||
        playerSelection === 'Scissors' && computerSelection === 'Paper' ||
        playerSelection === 'Paper' && computerSelection === 'Rock'
    ) {
        roundOutcome = 'win';
        outcomeDisplay.textContent = `You won! ${playerSelection} beats ${computerSelection}!`;
    }
    else if (
        computerSelection === 'Rock' && playerSelection === 'Scissors' ||
        computerSelection === 'Scissors' && playerSelection === 'Paper' ||
        computerSelection === 'Paper' && playerSelection === 'Rock'
    ) {
        roundOutcome = 'lose';
        outcomeDisplay.textContent = `You lost! ${computerSelection} beats ${playerSelection}!`;
    }
}

// Returns random weapon from array
function computerPlay() {
    const weapon = ['Rock', 'Paper', 'Scissors'];
    return weapon[Math.floor(Math.random() * weapon.length)];
}

function updateScore() {
    if (roundOutcome === 'win') {
        playerScore++;
    }
    else if (roundOutcome === 'lose') {
        computerScore++;
    }
}

function updateDisplay() {
    playerDisplay.textContent = `Player: ${playerScore}`;
    computerDisplay.textContent = `Computer: ${computerScore}`;
}

function displayWeaponChoice(playerSelection, computerSelection) {
    switch(playerSelection) {
        case 'Rock':
            playerWeaponSelection.textContent = '???';
            break;
        case 'Paper':
            playerWeaponSelection.textContent = '???';
            break;
        case 'Scissors':
            playerWeaponSelection.textContent = '???';
            break;
    }

    switch(computerSelection) {
        case 'Rock':
            computerWeaponSelection.textContent = '???';
            break;
        case 'Paper':
            computerWeaponSelection.textContent = '???';
            break;
        case 'Scissors':
            computerWeaponSelection.textContent = '???';
            break;
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

function playAgain(w, l) {
    if (w === true || l === true) {
        playerScore = 0;
        computerScore = 0;
        roundOutcome = '';
        playerDisplay.textContent = `Player: ${playerScore}`;
        computerDisplay.textContent = `Computer: ${computerScore}`;
        outcomeDisplay.textContent = 'Good Luck!';
        playerWeaponSelection.textContent = 'X';
        computerWeaponSelection.textContent = 'X';
    }
}