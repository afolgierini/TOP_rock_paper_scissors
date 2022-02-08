let plays = ['Rock', 'Paper', 'Scissors'];
let playerChoice, computerChoice;
let numPc = 0;
let numHum = 0;


function computerPlay(){
    let computerMove = plays[Math.floor(Math.random() * 3)];
    computerChoice = computerMove;
}

function humanPlay(){
    let playerMove = prompt(`What you chose? Rock, Paper, Scissors`)
    playerMove = playerMove.toLowerCase();
    playerMove = playerMove.charAt(0).toUpperCase() + playerMove.slice(1);
    playerChoice = playerMove;
}

function gameplay(){
    if(computerChoice == playerChoice){
        console.log(`It's a tie!`)
    }else if(computerChoice == 'Rock' && playerChoice == 'Paper'){
        console.log(`You won! ${playerChoice} beats ${computerChoice}!`)
    }else if(computerChoice == 'Paper' && playerChoice == 'Rock'){
        console.log(`You lost! ${computerChoice} beats ${playerChoice}!`)
    }else if(computerChoice == 'Rock' && playerChoice == 'Scissors'){
        console.log(`You lost! ${computerChoice} beats ${playerChoice}!`)
    }else if(computerChoice == 'Scissors' && playerChoice == 'Rock'){
        console.log(`You won! ${playerChoice} beats ${computerChoice}!`)
    }else if(computerChoice == 'Paper' && playerChoice == 'Scissors'){
        console.log(`You won! ${playerChoice} beats ${computerChoice}!`)
    }else if(computerChoice == 'Scissors' && playerChoice == 'Paper'){
        console.log(`You lost! ${computerChoice} beats ${playerChoice}!`)
    }
}

function singleRound(){
    computerPlay();
    humanPlay();
    gameplay(); winner, loser;
}

function gameplayFive(){
    if(computerChoice == playerChoice){
        //nothing
    }
    if(computerChoice == 'Rock' && playerChoice == 'Paper'){
        numHum++;
    }
    if(computerChoice == 'Paper' && playerChoice == 'Rock'){
        numPc++;
    }
     if(computerChoice == 'Rock' && playerChoice == 'Scissors'){
        numPc++;
    }
    if(computerChoice == 'Scissors' && playerChoice == 'Rock'){
        numHum++;
    }
    if(computerChoice == 'Paper' && playerChoice == 'Scissors'){
        numHum++;
    }
    if(computerChoice == 'Scissors' && playerChoice == 'Paper'){
        numPc++;
    }
}


function fiveRounds(){
    while(numHum < 5 && numPc < 5){
        computerPlay();
        humanPlay();
        gameplayFive(); 
    }
   
    if(numHum > numPc){
        return  'YOU WON! ' + numHum + ' x ' + numPc;
    }else if (numHum < numPc){
        return 'YOU LOST! ' + numHum + ' x ' + numPc;
    }

}

let ress = fiveRounds();
console.log(ress)