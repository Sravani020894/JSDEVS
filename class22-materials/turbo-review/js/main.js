// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let favdrink = "Hot chocolate";
favdrink = favdrink.trim();
console.log(favdrink);
//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let sentence = "Apple a day keeps doctor away";
console.log(sentence.search('Apple')); //it returns the index of the place word found
console.log(sentence.includes("Apple"));
// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function game(){
    let result=Math.random();
    if(result < 0.33)
        return "rock";
    else if(result > 0.33 && result < 0.66)
        return "paper";
    else
        return "scissors";
}
game();

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function wingame(playerchoice){
    let botchoice = game();
    if(playerchoice === 'rock' && botchoice === 'paper' || playerchoice === 'paper' && botchoice === 'rock' || playerchoice === 'scissors' && botchoice === 'paper')
        console.log("YOU WIN!!!");
    else if(playerchoice === botchoice)
        console.log("TIED");
    else    
        console.log("YOU LOSE");
}

wingame("rock");

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function gamex(choiceArray){
    choiceArray.forEach(element => wingame(element));
        
}
gamex(["rock","paper","scissors","rock"]);