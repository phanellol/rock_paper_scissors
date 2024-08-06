function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getComputerChoice() {
    let choice = getRandomInt(1, 3);
    if (choice === 1) {
        return 'rock';
    } else if (choice === 2) {
        return 'paper';
    } else if (choice === 3) {
        return 'scissors'
    }
}

function getHumanChoice() {
    let humanPromt = prompt('Choose rock, paper or scissors');
    humanPromt = humanPromt.toLowerCase()
    if (humanPromt === 'rock') {
        return 'rock';
    } else if (humanPromt === 'paper') {
        return 'paper';
    } else if (humanPromt === 'scissors') {
        return 'scissors'
    } else {
        return 'Wrong value! Type "rock", "paper" or "scissors"'
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice: string, computerChoice: string) {
    if (humanChoice === computerChoice) {
        return "It's draw!";
    }

    if (humanChoice === 'rock') {
        if (computerChoice === 'scissors') {
            ++humanScore;
            return 'You win! Rock beats scissors';
        } else if (computerChoice === 'paper') {
            ++computerScore;
            return 'You lose! Paper beats rock';
        }
    } else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            ++computerScore;
            return 'You lose! Scissors beats paper';
        } else if (computerChoice === 'rock') {
            ++humanScore;
            return 'You win! Paper beats rock';
        }
    } else if (humanChoice === 'scissors') {
        if (computerChoice === 'paper') {
            ++humanScore;
            return 'You win! Scissors beats paper'
        } else if (computerChoice === 'rock')
            ++computerScore;
        return 'You lose! Rock beats scissors'
    } else {
        return 'Wrong value! Type "rock", "paper" or "scissors'
    }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(getHumanChoice(), getComputerChoice()));
        console.log('Your score is: ' + humanScore);
        console.log('Computer score is: ' + computerScore);
    }
    if (computerScore > humanScore) {
        console.log('You lose this game!');
    } else if (computerScore < humanScore) {
        console.log('You win! Сongratulations!');
    } else {
        console.log("It's draw, man!");
    }
}

playGame();