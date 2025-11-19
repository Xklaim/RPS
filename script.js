function playRound(humanChoice, computerChoice) {
    console.log(computerChoice);
    console.log(humanChoice);

    alert(`You chose ${humanChoice} and I chose ${computerChoice}`);
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"]
    let rndNum = Math.floor(Math.random() * 10)

    if (rndNum <= 3){
        return choices[0];
    }else if(rndNum > 3 && rndNum <= 6){
        return choices[1];
    }else{
        return choices[2];
    }
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

playRound(humanSelection, computerSelection);