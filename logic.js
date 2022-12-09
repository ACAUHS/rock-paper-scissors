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
        // console.log(playRound(userInput, computerSelection))
        playRound(userInput, computerSelection)
    })
})


//function to determine who wins who loses + displays the win or loss
function playRound(userInput, computerSelection) {
    
    const scoreboardContent = document.createElement('div')
    const winMessage = 'You win!';
    const loseMessage = 'You lose!';
    const tieMessage = 'It\'s a tie!'; 
    
    if (userInput === computerSelection) {
        scoreboardContent.innerText = tieMessage;
        return scoreboard.appendChild(scoreboardContent);

    } else if (userInput === 'rock' && computerSelection === 'scissors' ||
               userInput === 'paper' && computerSelection === 'rock' ||
               userInput === 'scissors' && computerSelection === 'paper') {

        scoreboardContent.innerText = winMessage;    
        return scoreboard.appendChild(scoreboardContent);

    } else {
        scoreboardContent.innerText = loseMessage;
        return scoreboard.appendChild(scoreboardContent);
    }
}