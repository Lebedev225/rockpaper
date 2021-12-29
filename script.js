
function playRound (playerSelection, computerSelection) {
    alert("Computer chose " + computerSelection);
    
    if (userTotal < 5 && compTotal < 5) {
        if (playerSelection == computerSelection) {
            return alert("Tie!");
        }
    
        else if (playerSelection == "rock" && computerSelection == "scissors") {
            userTotal = userTotal + 1
            return alert("User Wins the round!");
        }
    
        else if (playerSelection == "paper" && computerSelection == "rock") {
            userTotal = userTotal + 1
            return alert("User Wins the round!");
        }
    
        else if (playerSelection == "scissors" && computerSelection == "paper") {
            userTotal = userTotal + 1
            return alert("User Wins the round!");
        }
    
        else {
            compTotal = compTotal + 1
            return alert("Computer Wins the round!");
        }
       

    
    
}}




let options = ["rock", "paper", "scissors"];
let userTotal = 0
let compTotal = 0

const userScore = document.querySelector("#userScore");
const compScore = document.querySelector("#compScore");


const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let playerSelection = button.id
        let computerSelectionIndex = Math.floor(Math.random() * options.length);
        let computerSelection = options[computerSelectionIndex];

        if (userTotal !== 5 && compTotal !==5) {
            playRound(playerSelection, computerSelection)
        }
         else if (userTotal == 5) {
            return alert("User Wins the Game!");
        }
        else if (compTotal == 5) {
            return alert("Computer Wins the Game!");
        }

        userScore.textContent = userTotal;
        compScore.textContent = compTotal;


    });



});
   









