
function playRound (playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        return console.log("Tie!");
    }

    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return console.log("User Wins!");
    }

    else if (playerSelection == "paper" && computerSelection == "rock") {
        return console.log("User Wins!");
    }

    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return console.log("User Wins!");
    }

    else {
        return console.log("Computer Wins!");

    }


}

let options = ["rock", "paper", "scissors"];
let playerInput = prompt("Rock, Paper or Scissors?: ");
let playerSelection = playerInput.toLowerCase();

   

let computerSelectionIndex = Math.floor(Math.random() * options.length);

let computerSelection = options[computerSelectionIndex];
console.log("You chose: " + playerSelection);

console.log("Computer chose: " + computerSelection);


playRound(playerSelection, computerSelection);


