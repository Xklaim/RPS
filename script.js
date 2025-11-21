function playRound(humanChoice, computerChoice) {
   if(computerChoice === humanChoice){
    alert(`i chose ${computerChoice} too.. Ahh.. Drawn`);
   }else if(
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper") 
    ){
    alert(`Oh you have beaten me.. i chose ${computerChoice}`);
    }else{
        alert(`Ah-ha! i won with ${computerChoice}`)
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

    //the commented was my old way to achieve the same thing which the next single line does..
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


for(let i = 0; i<5; i++){
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection);
}
