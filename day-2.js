console.log("Hello World");
function getComputerChoice () {
    let tab = ['7jra' ,'m9ass','wr9a'];
    let result =Math.floor(Math.random() * tab.length);
    return tab[result];
 
}

const achkhtarpc = getComputerChoice();
console.log("Ana khtarit:", achkhtarpc);

// This function determines the winner of a round of the game based on player and computer choices
function playRound(playerSelection, computerSelection) {
    // Check for a tie condition
    if (playerSelection === computerSelection) {
        return "taadoul";
    } 
    // Check various win conditions for player and computer
    else if (playerSelection === 'rock' && computerSelection === 'paper') {
        return 'Pc rbah';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        return 'Ana rbaht'; 
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        return 'Pc rbah';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        return 'Ana rbaht';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        return 'Pc rbah';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        return 'Ana rbaht';
    } else {
        return 'Ana rbaht';
    }
}

const playerSelection = 'rock'; // Replace with the actual player's choice
const computerSelection = getComputerChoice(); // Assume you have a getComputerChoice function
 playRound(playerSelection, computerSelection); // Output the result to the console
