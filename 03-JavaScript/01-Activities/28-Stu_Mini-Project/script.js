
// variables to track wins, losses, and ties
var wins = 0;
var losses = 0;
var ties = 0;

function playRound() {
// options for choices
var choices = ["R", "P", "S"]

// ask the user to input their choice
var userChoice = window.prompt("Enter R, P, or S");
console.log(userChoice);


// firgure out the computer's choice
var computerChoice;
var computerChoiceValue = Math.random();
    if (computerChoiceValue > .6666){
        computerChoice = "R";
    }
    else if (computerChoiceValue > .3333){
        computerChoice = "P";
    }
    else {
        computerChoice = "S";
    }

console.log("Comp:" +computerChoice);

// compare choices and increment wins/losses/ties variable. aka compare computer and human choices and add one to wins/losses/ties variable.
    if (userChoice == computerChoice){
        alert("tie!");
        ties = ties+1;
    }
    else if(userChoice=="R"&&computerChoice=="P") {
        losses=losses+1
    }
    else if(userChoice=="P"&&computerChoice=="S") {
        losses=losses+1
    }
    else if(userChoice=="S"&&computerChoice=="R") {
        losses=losses+1
    }
    else {
        wins = wins+1;
    }
    alert("wins"+wins+" ...ties:"+ties+"...losses:"+losses);


// ...play again?
    playRound();

}

playRound ();

console.log("END");
