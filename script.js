function playRound(humanChoice, computerChoice) {
   if(computerChoice === humanChoice){
    alert(`i chose ${computerChoice} too.. Ahh.. Drawn, Your score : ${humanScore}, My score : ${computerScore}`);
   }else if(
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper") 
    ){
        humanScore++
    alert(`Oh you have beaten me.. i chose ${computerChoice}, Your score : ${humanScore}, My score : ${computerScore}`);
    }else{
        computerScore++
        alert(`Ah-ha! i won with ${computerChoice}, Your score : ${humanScore}, My score : ${computerScore}`)
    }
    
}



function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    // let rndNum = Math.floor(Math.random() * 10)

    // if (rndNum <= 3){
    //     return choices[0];
    // }else if(rndNum > 3 && rndNum <= 6){
    //     return choices[1];
    // }else{
    //     return choices[2];
    // }

    //the commented was my old way to achieve the same thing which the next single line does, DAMN..
    return choices[Math.floor(Math.random() * 3)]
}

function getHumanChoice(){
    const choice = prompt("Choose wisely, human. Rock, Paper or Scissors:")

    if (!choice){
        console.log("Damn you Human.");
        return getHumanChoice();
    }else{
        const refinedChoice = choice.replace(/\s/g, '').toLowerCase();
        if(refinedChoice === "rock" || refinedChoice ==="paper" || refinedChoice ==="scissors"){
            return refinedChoice;
        }else{
            return getHumanChoice()
        }
    }
}

let computerScore = 0;
let humanScore = 0;

for(let i = 0; i<5; i++){
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
}

if (humanScore > computerScore) {
  alert(`You win the match! Final Score - You: ${humanScore}, Me: ${computerScore}`);
} else if (computerScore > humanScore) {
  alert(`I win the match! Final Score - You: ${humanScore}, Me: ${computerScore}`);
} else {
  alert(`The match is a draw! Final Score - You: ${humanScore}, Me: ${computerScore}`);
}
