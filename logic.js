//global variables
const selections = ['rock', 'paper', 'scissors']
const buttons = document.querySelectorAll('button')
const scoreboard = document.querySelector('#scoreboard')
const scoreboardContent = document.createElement('div')
const userScore = document.querySelector('#userScore')
const cpuScore = document.querySelector('#cpuScore')
const results = document.querySelector('.results')
let iUser = 0;
let iCPU = 0;

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
        let outcomeRound = playRound(userInput, computerSelection)
        console.log('pc: ', computerSelection) //change these into divs that will update as the games get played
        console.log('user: ', userInput)
        playFive(outcomeRound)
        
    })
});

//reset button
document.querySelector('#resetGame').addEventListener('click', () => {
    window.location.reload();
    return false
}) 

//function that plays the game to 5
function playFive(outcomeRound) {

    while (iUser < 5 && iCPU < 5) {
        if (outcomeRound === 'It\'s a tie!') {
            return results.innerText = `${iUser} - ${iCPU}` 
        } else if (outcomeRound === 'You win!') {
            ++iUser;
            // return userScore.innerText = `${iUser}`;
            return results.innerText = `${iUser} - ${iCPU}` 
        } else if (outcomeRound === 'You lose!'){
            ++iCPU;
            // return cpuScore.innerText = `${iCPU}`;
            return results.innerText = `${iUser} - ${iCPU}` 
        } 
    }
}

//function that plays the round to a winner
function playRound(userInput, computerSelection) {
    
    const winMessage = 'You win!';
    const loseMessage = 'You lose!';
    const tieMessage = "It\'s a tie!"; 
    
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