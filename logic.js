//global variables
const selections = ['rock', 'paper', 'scissors']


//random choice generator for computer
function getComputerChoice() {
    const selectIndex = Math.floor(Math.random() * selections.length);
    return selections[selectIndex]
}

//click event based on what the selection
const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', e => {
        const userInput = button.dataset.selection
        let computerSelection = getComputerChoice()
        console.log('pc: ', computerSelection)
        console.log('user: ', userInput)
        console.log(playRound(userInput, computerSelection))
    })
})

//function to determine who wins who loses

function playRound(userInput, computerSelection) {
    
    const winMessage = 'You win!';
    const loseMessage = 'You lose!';
    const tieMessage = 'It\'s a tie!'; 

    // const scoreboard = document.getElementById('scoreboard')
    
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