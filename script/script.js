function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function getComputerChoice() {
    var choice = getRandomInt(1, 3);
    if (choice === 1) {
        return 'rock';
    }
    else if (choice === 2) {
        return 'paper';
    }
    else if (choice === 3) {
        return 'scissors';
    }
}
var container = document.querySelector("#container");
var userPaperBtn = document.createElement("button");
userPaperBtn.textContent = "Paper";
userPaperBtn.classList.add("paperBtn");
userPaperBtn.classList.add("chooseBtn");
var userRockBtn = document.createElement("button");
userRockBtn.textContent = "Rock";
userRockBtn.classList.add("rockBtn");
userRockBtn.classList.add("chooseBtn");
var userScissorsBtn = document.createElement("button");
userScissorsBtn.textContent = "Scissors";
userScissorsBtn.classList.add("scissorsBtn");
userScissorsBtn.classList.add("chooseBtn");
container.appendChild(userPaperBtn);
container.appendChild(userRockBtn);
container.appendChild(userScissorsBtn);
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "It's draw!";
    }
    if (humanChoice === 'rock') {
        if (computerChoice === 'scissors') {
            ++humanScore;
            return 'You win! Rock beats scissors';
        }
        else if (computerChoice === 'paper') {
            ++computerScore;
            return 'You lose! Paper beats rock';
        }
    }
    else if (humanChoice === 'paper') {
        if (computerChoice === 'scissors') {
            ++computerScore;
            return 'You lose! Scissors beats paper';
        }
        else if (computerChoice === 'rock') {
            ++humanScore;
            return 'You win! Paper beats rock';
        }
    }
    else if (humanChoice === 'scissors') {
        if (computerChoice === 'paper') {
            ++humanScore;
            return 'You win! Scissors beats paper';
        }
        else if (computerChoice === 'rock')
            ++computerScore;
        return 'You lose! Rock beats scissors';
    }
    else {
        return 'Wrong value! Type "rock", "paper" or "scissors';
    }
}
var humanScore = 0;
var computerScore = 0;
