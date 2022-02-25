const plays = ['ROCK', 'PAPER', 'SCISSORS'];
let playerChoice, computerChoice;
let scorePlayer = 0;
let scoreComputer = 0;


const btnRock = document.querySelector('.btnRock');
btnRock.addEventListener('click', e => {
    playerChoice = 'ROCK'
})
btnRock.addEventListener('click', playRound);

const btnPaper = document.querySelector('.btnPaper');
btnPaper.addEventListener('click', e => {
    playerChoice = 'PAPER'
})
btnPaper.addEventListener('click', playRound);
50
const btnScissors = document.querySelector('.btnScissors');
btnScissors.addEventListener('click', e => {
    playerChoice = 'SCISSORS'
})
btnScissors.addEventListener('click', playRound);

const btnPlayAgain = document.querySelector('.playAgain');
btnPlayAgain.addEventListener('click', e => {
    location.reload();
})
btnPlayAgain.disabled = true;


const resultPhrase = document.querySelector('.results');
const scorePlayerPhrase = document.querySelector('.playerScore');
const scoreComputerPhrase = document.querySelector('.pcScore');
const btnAppear = document.querySelector('.buttonAppear');
const playerScoreNumber = document.querySelector('.plScoreNumb');
const computerScoreNumber = document.queryCommandIndeterm('.pcScoreNumb');



function computerPlay(){
    let computerMove = plays[Math.floor(Math.random() * 3)];
    computerChoice = computerMove;
}

function gameplay(){
        if(computerChoice == playerChoice){
            resultPhrase.textContent =  `IT'S A TIE!`;
        }else if(computerChoice == 'ROCK' && playerChoice == 'PAPER'){
            resultPhrase.textContent = `YOU WON! ${playerChoice} BEATS ${computerChoice}!`
        }else if(computerChoice == 'PAPER' && playerChoice == 'ROCK'){
            resultPhrase.textContent = `YOU LOST! ${computerChoice} BEATS ${playerChoice}!`
        }else if(computerChoice == 'ROCK' && playerChoice == 'SCISSORS'){
            resultPhrase.textContent = `YOU LOST! ${computerChoice} BEATS ${playerChoice}!`
        }else if(computerChoice == 'SCISSORS' && playerChoice == 'ROCK'){
            resultPhrase.textContent = `YOU WON! ${playerChoice} BEATS ${computerChoice}!`
        }else if(computerChoice == 'PAPER' && playerChoice == 'SCISSORS'){
            resultPhrase.textContent = `YOU WON! ${playerChoice} BEATS ${computerChoice}!`
        }else if(computerChoice == 'SCISSORS' && playerChoice == 'PAPER'){
            resultPhrase.textContent = `YOU LOST! ${computerChoice} BEATS ${playerChoice}!`
        }
}

function scoreCount(){
    if(computerChoice == 'ROCK' && playerChoice == 'PAPER'){
        scorePlayer++;
        scorePlayerPhrase.textContent = `YOUR SCORE: ${scorePlayer}`;
    }
    if(computerChoice == 'PAPER' && playerChoice == 'ROCK'){
        scoreComputer++;
        scoreComputerPhrase.textContent = `MY SCORE: ${scoreComputer}`;
    }
     if(computerChoice == 'ROCK' && playerChoice == 'SCISSORS'){
        scoreComputer++;
        scoreComputerPhrase.textContent = `MY SCORE: ${scoreComputer}`;
    }
    if(computerChoice == 'SCISSORS' && playerChoice == 'ROCK'){
        scorePlayer++;
        scorePlayerPhrase.textContent = `YOUR SCORE: ${scorePlayer}`;
    }
    if(computerChoice == 'PAPER' && playerChoice == 'SCISSORS'){
        scorePlayer++;
        scorePlayerPhrase.textContent = `YOUR SCORE: ${scorePlayer}`;
    }
    if(computerChoice == 'SCISSORS' && playerChoice == 'PAPER'){
        scoreComputer++;
        scoreComputerPhrase.textContent = `MY SCORE: ${scoreComputer}`;
    }
}

function isOver(){
    if(scorePlayer == 5 || scoreComputer == 5){
        btnRock.disabled = true;
        btnPaper.disabled = true;
        btnScissors.disabled = true;
        btnPlayAgain.disabled = false;

    }else{
        btnRock.disabled = false;
        btnPaper.disabled = false;
        btnScissors.disabled = false;
        btnPlayAgain.disabled = true;
    } 
    if(scorePlayer == 5){
        resultPhrase.textContent = 'OOH!! IT LOOKS LIKE YOU GONNA LIVE FOR NOW.';
        resultPhrase.style.color = 'Green';
    }else if(scoreComputer == 5){
        resultPhrase.textContent = 'YOU LOST! BYE BYE... OR... MAYBE WE CAN PLAY AGAIN??';
        resultPhrase.style.color = 'Red';
    }
}


function playRound(){
    computerPlay();
    gameplay();
    scoreCount();
    isOver();
}