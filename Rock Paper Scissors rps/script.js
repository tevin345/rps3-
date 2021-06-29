var userChoice = prompt("Do you chose rock, paper, scissors?");
userChoice = userChoice.toLowerCase();
if (userChoice == 'rock') {
    document.write('You picked ' + userChoice + '<br />');
} else if (userChoice == 'paper') {
    document.write('You picked ' + userChoice + '<br />');
} else if (userChoice == 'scissors') {
    document.write('You picked ' + userChoice + '<br />');
} else {
    document.write('You did not pick anything <br /');
}
let computerPick = Math.random();
let computerChoice = '';
if (computerPick < 0.34){
    computerChoice = 'rock';
}else if (computerPick < 0.67){
    computerChoice = 'paper';
} else {
    computerChoise = 'scissors';
}
document.write('Computer choice: ' + computerChoice + '<br/>');

var compare = function(choice1, choice2 ){
    if (choice1 == choice2) {
        return ' It is a tie game';
    }
    if (choice1 == 'rock'){
        if (choice2 =='paper'){ 
            return 'Oh No The computer won';
        } else {
            return 'You Won!!';
}
}
    if (choice1 == 'paper'){
        if (choice2 =='scissors'){ 
            return 'Oh No The computer won';
        } else {
            return 'You Won!!';}}
    if (choice1 == 'scissors'){
        if (choice2 =='rock'){ 
            return 'Oh No The computer won';
        } else {
            return 'You Won!!';
        }
     }
  }
var winner = compare(userChoice, computerChoice);
document.write('The winner is: ' + winner);

