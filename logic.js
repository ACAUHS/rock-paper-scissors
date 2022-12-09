//global variables
const selections = [
    {
        input: 'rock',
        beats: 'scissors',
    },
    {
        input: 'scissors',
        beats: 'paper',
    },
    {
        input: 'paper',
        beats: 'rock',
    }
]


//random choice generator for computer

function getComputerChoice() {
    const selectIndex = Math.floor(Math.random() * selections.length);
    return selections[selectIndex]
}

console.log(getComputerChoice())

//click even based on what u click

const buttons = document.querySelectorAll('button')

buttons.forEach((button) => {
    button.addEventListener('click', e => {
        const userInput = button.dataset.selection
    })
})



// function getComputerChoice() {
//     let randomNumber = Math.floor(Math.random() * 3)

//     if (randomNumber == 0) {
//         return "rock"
//     } else if (randomNumber == 1) {
//         return "paper"
//     } else {
//         return "scissors"
//     }
// }

// //player selector from buttons

// const buttons = document.querySelectorAll('[data-selection]')

// buttons.forEach(buttons => {
//     buttons.addEventListener('click', e => {
//         playerSelection = buttons.dataset.selection
//         console.log(playRound(playerSelection, getComputerChoice()))
//         console.log(getComputerChoice())
//     })
// })



// //rounds of RPS with return statements on W/L/T
// function playRound(playerSelection, computerSelection) {
    

//     if (playerSelection === computerSelection) {
//         return "Nobody wins; it\'s a tie!"
//     } else if (playerSelection === "rock" && computerSelection === "scissors") {
//         return "You win!"
//     } else if (playerSelection === "rock" && computerSelection === "paper") {
//         return "You lose!"
//     } else if (playerSelection === "paper" && computerSelection === "rock") {
//         return "You win!"
//     } else if (playerSelection === "paper" && computerSelection === "scissors") {
//         return "You lose!"
//     } else if (playerSelection === "scissors" && computerSelection === "paper") {
//         return "You win!"
//     } else if (playerSelection === "scissors" && computerSelection === "rock") {
//         return "You lose!"
//     } else {
//         return "What happened..."
//     }
// }