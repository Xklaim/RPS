function playRound(humanChoice, computerChoice) {
   if(computerChoice === humanChoice){
    document.getElementById("whoWon").textContent = `Ah.. I chose ${computerChoice} as well.. Nobody won..`;
   }else if(
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper") 
    ){
        humanScore++
        document.getElementById("humanScore").textContent = humanScore;
        document.getElementById("whoWon").textContent = `Oh.. You have beaten me human.. i chose ${computerChoice}.. I am impressed..`
    }else{
        computerScore++
        document.getElementById("computerScore").textContent = computerScore;
        document.getElementById("whoWon").textContent = `I have beaten you with my ${computerChoice}, don't you start crying now..`
    }
    
}



function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    return choices[Math.floor(Math.random() * 3)]
}


let computerScore = 0;
let humanScore = 0;

const buttons = document.querySelectorAll('button');
buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const humanSelection = btn.id;
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  });
});