function computerPlay() {
    const weapon = ['Rock', 'Paper', 'Scissors'];
    return weapon[Math.floor(Math.random() * weapon.length)];
}

const playGround = document.querySelector('.main');
const weaponBtn = playGround.querySelector('.weapon-btn');

weaponBtn.addEventListener('click', (e) => {
        let playerPick = e.target;
        // let weapon = userPick.dataset.weapon;
        let playerSelection = playerPick.textContent;

        let computerSelection = computerPlay();
        console.log(playerSelection, computerSelection);
        playRound(playerSelection, computerSelection);
        console.log(playerScore, computerScore);
})

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundOutcome = 'tie';
        console.log('It"s a tie');
    }
    else if (
        playerSelection === 'Rock' && computerSelection === 'Scissors' ||
        playerSelection === 'Scissors' && computerSelection === 'Paper' ||
        playerSelection === 'Paper' && computerSelection === 'Rock'
    ) {
        roundOutcome = 'win';
        console.log('You win');
    }
    else if (
        computerSelection === 'Rock' && playerSelection === 'Scissors' ||
        computerSelection === 'Scissors' && playerSelection === 'Paper' ||
        computerSelection === 'Paper' && playerSelection === 'Rock'
    ) {
        roundOutcome = 'lose';
        console.log('You lose');
    }
    updateScore();
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