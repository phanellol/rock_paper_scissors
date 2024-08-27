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

let humanScore = 0;
let computerScore = 0;

const container = document.querySelector("#container");

const userPaperBtn = document.createElement("button");
userPaperBtn.textContent = "Paper";
userPaperBtn.classList.add("paperBtn");
userPaperBtn.classList.add("chooseBtn");
let userPaper = "paper";

const userRockBtn = document.createElement("button");
userRockBtn.textContent = "Rock"
userRockBtn.classList.add("rockBtn");
userRockBtn.classList.add("chooseBtn");
let userRock = "rock";

const userScissorsBtn = document.createElement("button");
userScissorsBtn.textContent = "Scissors"
userScissorsBtn.classList.add("scissorsBtn");
userScissorsBtn.classList.add("chooseBtn");
let userScissors = "scissors";




container.appendChild(userPaperBtn);
container.appendChild(userRockBtn);
container.appendChild(userScissorsBtn);


function playRoundPaper() {
    let computerChoice = getComputerChoice();
    if (userPaper === computerChoice) {
        let draw = document.createElement("p");
        draw.textContent = "Draw! Nobody takes points";
        container.appendChild(draw);
    } else if (computerChoice === "rock") {
        let humanWin = document.createElement("p");
        humanWin.textContent = "You win! Paper beats Rock"
        container.appendChild(humanWin);
        ++humanScore;
    } else if (computerChoice === "scissors") {
        let computerWin = document.createElement("p");
        computerWin.textContent = "You lose! Scissors beats paper";
        container.appendChild(computerWin);
        ++computerScore;
    } else {
        alert("Wrong!");
    }
    console.log(`Youre score is ${humanScore}`);
    console.log(`Computer score is ${computerScore}`);
}

function playRoundRock() {
    let computerChoice = getComputerChoice();
    if (userRock === computerChoice) {
        let draw = document.createElement("p");
        draw.textContent = "Draw! Nobody takes points";
        container.appendChild(draw);
    } else if (computerChoice === "scissors") {
        let humanWin = document.createElement("p");
        humanWin.textContent = "You win! Rock beats scissors"
        container.appendChild(humanWin);
        ++humanScore;
    } else if (computerChoice === "paper") {
        let computerWin = document.createElement("p");
        computerWin.textContent = "You lose! Paper beats rock";
        container.appendChild(computerWin);
        ++computerScore;
    } else {
        alert("Wrong!");
    }
    console.log(`Youre score is ${humanScore}`);
    console.log(`Computer score is ${computerScore}`);
}

function playRoundScissors() {
    let computerChoice = getComputerChoice();
    if (userScissors === computerChoice) {
        let draw = document.createElement("p");
        draw.textContent = "Draw! Nobody takes points";
        container.appendChild(draw);
    } else if (computerChoice === "paper") {
        let humanWin = document.createElement("p");
        humanWin.textContent = "You win! Scissors beats paper"
        container.appendChild(humanWin);
        ++humanScore;
    } else if (computerChoice === "rock") {
        let computerWin = document.createElement("p");
        computerWin.textContent = "You lose! Rock beats paper";
        container.appendChild(computerWin);
        ++computerScore;
    } else {
        alert("Wrong!");
    }
    console.log(`Youre score is ${humanScore}`);
    console.log(`Computer score is ${computerScore}`);

}

userPaperBtn.addEventListener("click", playRoundPaper);
userRockBtn.addEventListener("click", playRoundRock);
userScissorsBtn.addEventListener("click", playRoundScissors);

const results = document.createElement("div");
results.classList.add("resultsClass");
results.textContent = "Points";
const humanScoreDiv = document.createElement("div");
humanScoreDiv.classList.add("humanScoreClass");
humanScoreDiv.textContent = `Your score is: ${humanScore}`;
const computerScoreDiv = document.createElement("div");
computerScoreDiv.classList.add("computerScoreClass");
computerScoreDiv.textContent = `Computer score is: ${humanScore}`;

container.appendChild(results);
results.appendChild(humanScoreDiv);
results.appendChild(computerScoreDiv);

