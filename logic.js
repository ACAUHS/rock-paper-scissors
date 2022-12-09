//global variables
const selections = ['rock', 'paper', 'scissors']
const buttons = document.querySelectorAll('button')
const scoreboard = document.querySelectorAll('#scoreboard')
const scoreboardContent = document.createElement('div')

//function that displays the playRound results
function results() {
    scoreboardContent.innerText = `${playRound(userInput, computerSelection)}` //where will this userInput be defined?
    scoreboardContent.append(scoreboard)
}


console.log(scoreboard)
//random choice generator for computer
function getComputerChoice() {
    const selectIndex = Math.floor(Math.random() * selections.length);
    return selections[selectIndex]
}

//click event based on what the selection
buttons.forEach((button) => {
    button.addEventListener('click', e => {
        const userInput = button.dataset.selection
        let computerSelection = getComputerChoice()
        console.log('pc: ', computerSelection) //change these into divs that will update as the games get played
        console.log('user: ', userInput)
        console.log(playRound(userInput, computerSelection))
    })
})

//function to determine who wins who loses
function playRound(userInput, computerSelection) {
    
    const winMessage = 'You win!';
    const loseMessage = 'You lose!';
    const tieMessage = 'It\'s a tie!'; 
    
    if (userInput === computerSelection) {
        return tieMessage
    } else if (userInput === 'rock' && computerSelection === 'scissors' ||
               userInput === 'paper' && computerSelection === 'rock' ||
               userInput === 'scissors' && computerSelection === 'paper') {
        return winMessage
    } else {
        return loseMessage
    }
}