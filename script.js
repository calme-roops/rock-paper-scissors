// Function for choosing a random play for computer
function getComputerChoice() { 
    choices = ['ROCK', 'PAPER', 'SCISSORS']
    num = Math.floor(Math.random() * choices.length);
    return choices[num].toUpperCase();
}    

//Function to playRound and output the game result using DOM
function playRound(playerSelection, computerSelection) {
    const result = document.querySelector('.result')
    if (playerSelection == computerSelection) {
        result.textContent = 'Ties'
        return 'Ties'
    } else if (playerSelection == 'ROCK' && computerSelection == 'SCISSORS') {
        result.textContent = 'You Won! Rock beats Scissors'  
        return true          
    } else if (playerSelection == 'PAPER' && computerSelection == 'ROCK') {
        result.textContent = 'You Won! Paper beats Rock'
        return true
    } else if (playerSelection == 'SCISSORS' && computerSelection == 'PAPER') {
        result.textContent = 'You Won! Scissors beat Paper'
        return true
    } else {
        result.textContent = 'You Lost!'
        return false
    }
}

// Declaring scores
computerScore = 0;
playerScore = 0;
const finalScore = document.querySelector('.final-score')

//Function to keep track of scores
function getScore(score) {
    if (score == true) {
        playerScore++
        return finalScore.textContent = `Your score is ${playerScore} & Computer score is ${computerScore}`
    } else if (score == false) {
        computerScore++
        return finalScore.textContent = `Your score is ${playerScore} & Computer score is ${computerScore}`
    } else (score == 'Ties') 
        return finalScore.textContent = `Your score is ${playerScore} & Computer score is ${computerScore}`
}

// Function to reset the game a
function finalWinner() {
    if (playerScore == 5){
        document.querySelector('.option').textContent = ''
        document.querySelector('.final-score').classList.add('final-style')
        document.querySelector('.result').classList.add('final-style')
        document.querySelector('.final-score').textContent = `You scored: ${playerScore} \n Computer score: ${computerScore}`
        document.querySelector('.result').textContent = 'YOU WON THE MATCH'
        playerScore = 0
        computerScore = 0
    } else if (computerScore == 5){
        document.querySelector('.option').textContent = ''
        document.querySelector('.final-score').classList.add('final-style')
        document.querySelector('.result').classList.add('final-style')
        document.querySelector('.final-score').textContent = `Computer score: ${computerScore} \n You scored: ${playerScore}`
        document.querySelector('.result').textContent = 'SADLY, COMPUTER WON THE MATCH'
        playerScore = 0
        computerScore = 0
        
    }
}

//Initializing the game by clicking gameOn button and changing DOM
const element = document.querySelector('#main-button')
element.addEventListener("click", () => {
    document.querySelector('.game-on').textContent = 'Game Started, Choose your choice.'
} )

// Event listener based on user click on button
const buttons = document.querySelectorAll('.btn');
buttons.forEach(button => {
    const option = document.querySelector('.option')
    button.addEventListener('click', () => {
        var playerSelection = `${button.value}`
        var computerSelection = getComputerChoice();
        option.textContent = `You chose ${button.value} & Computer chose ${computerSelection}`
        outcome = playRound(playerSelection, computerSelection)
        getScore(outcome)
        finalWinner()
        })
})

// Eventlistener to resetGame by clicking the reset button
const resetGame = document.querySelector('.reset')
resetGame.addEventListener('click', () => {
    playerScore = 0
    computerScore = 0
    document.querySelector('.game-on').textContent = 'Click to start the game again!'
    document.querySelector('.option').textContent = ''
    document.querySelector('.final-score').textContent = ''
    document.querySelector('.result').textContent = ''
})