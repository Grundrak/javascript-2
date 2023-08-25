const getUserChoice = (userInput) => {
    userInput = userInput.toLowerCase();
    if (userInput == "rock" || userInput == "paper" || userInput == "scissors") {
      return userInput;
    } else {
      console.log("error message retype your word");
    }
  };
  function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3);
    switch (randomNumber) {
      case 0:
        return "rock";
        break;
      case 1:
        return "paper";
        break;
      case 2:
        return "scissors";
        break;
      default:
        console.log("Eroor!!");
        break;
       
    }
  }
  
  function determineWinner(userChoice, computerChoice) {
   if( userChoice === computerChoice ){
        return 'the game is a tie';}
      if(userChoice==='rock'){
        if(computerChoice==='paper'){
          return 'computer won';}
        else{
          return 'user won';}} 
      if(userChoice==='paper'){
        if(computerChoice==='rock'){
          return 'user won';}
        else if (computerChoice ==='scissors'){
          return 'computer won';}
        }
      if(userChoice==='scissors'){
        if(computerChoice ==='paper'){
          return 'user won';}
        else if(computerChoice==='rock'){
          return 'user won';}}
        };
    const playGame = () => {
      let userChoice = getUserChoice('rock');
      console.log('Nta khtariti: ' + userChoice);
      let computerChoice = getComputerChoice();
      console.log('Pc khtar : ' + computerChoice);
      console.log(determineWinner(userChoice,computerChoice));
    }
    playGame()
  