
function playRound (playerSelection, computerSelection) {
    console.log("Computer chose: " + computerSelection);
    
    if (userTotal < 5 && compTotal < 5) {
        if (playerSelection == computerSelection) {
            return console.log("Tie!");
        }
    
        else if (playerSelection == "rock" && computerSelection == "scissors") {
            userTotal = userTotal + 1
            return console.log("User Wins!");
        }
    
        else if (playerSelection == "paper" && computerSelection == "rock") {
            userTotal = userTotal + 1
            return console.log("User Wins!");
        }
    
        else if (playerSelection == "scissors" && computerSelection == "paper") {
            userTotal = userTotal + 1
            return console.log("User Wins!");
        }
    
        else {
            compTotal = compTotal + 1
            return console.log("Computer Wins!");
        }
       

    } else if (userTotal == 5) {
        return console.log("User wins the game!");
        
    }
     else if (compTotal == 5) {
        return console.log("Computer wins the game");
        
    }
    
}


let options = ["rock", "paper", "scissors"];
let userTotal = 0
let compTotal = 0


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id
        let computerSelectionIndex = Math.floor(Math.random() * options.length);

        let computerSelection = options[computerSelectionIndex];
        if (userTotal !== 5 && compTotal !== 5) {
            playRound(playerSelection, computerSelection)
        }
    });



});
   


//console.log("You chose: " + playerSelection);






