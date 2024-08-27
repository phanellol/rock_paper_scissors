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
var humanScore = 0;
var computerScore = 0;
var container = document.querySelector("#container");
var userPaperBtn = document.createElement("button");
userPaperBtn.textContent = "Paper";
userPaperBtn.classList.add("paperBtn");
userPaperBtn.classList.add("chooseBtn");
var userPaper = "paper";
var userRockBtn = document.createElement("button");
userRockBtn.textContent = "Rock";
userRockBtn.classList.add("rockBtn");
userRockBtn.classList.add("chooseBtn");
var userRock = "rock";
var userScissorsBtn = document.createElement("button");
userScissorsBtn.textContent = "Scissors";
userScissorsBtn.classList.add("scissorsBtn");
userScissorsBtn.classList.add("chooseBtn");
var userScissors = "scissors";
container.appendChild(userPaperBtn);
container.appendChild(userRockBtn);
container.appendChild(userScissorsBtn);
function playRoundPaper() {
    var computerChoice = getComputerChoice();
    if (userPaper === computerChoice) {
        var draw = document.createElement("p");
        draw.textContent = "Draw! Nobody takes points";
        container.appendChild(draw);
    }
    else if (computerChoice === "rock") {
        var humanWin = document.createElement("p");
        humanWin.textContent = "You win! Paper beats Rock";
        container.appendChild(humanWin);
        ++humanScore;
    }
    else if (computerChoice === "scissors") {
        var computerWin = document.createElement("p");
        computerWin.textContent = "You lose! Scissors beats paper";
        container.appendChild(computerWin);
        ++computerScore;
    }
    else {
        alert("Wrong!");
    }
    console.log("Youre score is ".concat(humanScore));
    console.log("Computer score is ".concat(computerScore));
}
function playRoundRock() {
    var computerChoice = getComputerChoice();
    if (userRock === computerChoice) {
        var draw = document.createElement("p");
        draw.textContent = "Draw! Nobody takes points";
        container.appendChild(draw);
    }
    else if (computerChoice === "scissors") {
        var humanWin = document.createElement("p");
        humanWin.textContent = "You win! Rock beats scissors";
        container.appendChild(humanWin);
        ++humanScore;
    }
    else if (computerChoice === "paper") {
        var computerWin = document.createElement("p");
        computerWin.textContent = "You lose! Paper beats rock";
        container.appendChild(computerWin);
        ++computerScore;
    }
    else {
        alert("Wrong!");
    }
    console.log("Youre score is ".concat(humanScore));
    console.log("Computer score is ".concat(computerScore));
}
function playRoundScissors() {
    var computerChoice = getComputerChoice();
    if (userScissors === computerChoice) {
        var draw = document.createElement("p");
        draw.textContent = "Draw! Nobody takes points";
        container.appendChild(draw);
    }
    else if (computerChoice === "paper") {
        var humanWin = document.createElement("p");
        humanWin.textContent = "You win! Scissors beats paper";
        container.appendChild(humanWin);
        ++humanScore;
    }
    else if (computerChoice === "rock") {
        var computerWin = document.createElement("p");
        computerWin.textContent = "You lose! Rock beats paper";
        container.appendChild(computerWin);
        ++computerScore;
    }
    else {
        alert("Wrong!");
    }
    console.log("Youre score is ".concat(humanScore));
    console.log("Computer score is ".concat(computerScore));
}
userPaperBtn.addEventListener("click", playRoundPaper);
userRockBtn.addEventListener("click", playRoundRock);
userScissorsBtn.addEventListener("click", playRoundScissors);
var results = document.createElement("div");
results.classList.add("resultsClass");
results.textContent = "Points";
var humanScoreDiv = document.createElement("div");
humanScoreDiv.classList.add("humanScoreClass");
humanScoreDiv.textContent = "Your score is: ".concat(humanScore);
var computerScoreDiv = document.createElement("div");
computerScoreDiv.classList.add("computerScoreClass");
computerScoreDiv.textContent = "Computer score is: ".concat(humanScore);
container.appendChild(results);
results.appendChild(humanScoreDiv);
results.appendChild(computerScoreDiv);
