//global variables
const selections = ['rock', 'paper', 'scissors']
const buttons = document.querySelectorAll('button')
const scoreboard = document.querySelector('#scoreboard')
const scoreboardContent = document.createElement('div')

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
        playRound(userInput, computerSelection)
    })
});

function playRound(userInput, computerSelection) {
    
    const scoreboardContent = document.createElement('div')
    const winMessage = 'You win!';
    const loseMessage = 'You lose!';
    const tieMessage = 'It\'s a tie!'; 
    
        if (userInput === computerSelection) {
            return scoreboard.innerText = tieMessage;

        } else if (userInput === 'rock' && computerSelection === 'scissors' ||
                userInput === 'paper' && computerSelection === 'rock' ||
                userInput === 'scissors' && computerSelection === 'paper') {    
            return scoreboard.innerText = winMessage;

        } else {
            return scoreboard.innerText = loseMessage;
        } 
};