// *Variables*
// Declare a variable, reassign it to your fav holiday, make sure it is in all caps, and print the value to the console
let favholiday="Diwali";
favholiday=favholiday.toUpperCase();
console.log(favholiday);
//Declare a variable, assign it a string, alert the last three characters in the string (Use your google-fu and the MDN)
let fullname="sravani rebba";
alert(fullname.slice(-3));
// *Functions*
// Create a function that takes in 5 numbers. Subtract all five from 100. Alert the absolute value of the difference. Call the function.
function subtraction(n1,n2,n3,n4,n5){
    let result = 100 -n1-n2-n3-n4-n5;
    alert(Math.abs(result));
}
subtraction(20,4,35,5,6);

// Create a function that takes in 3 numbers. Console log lowest and highest values. Call the function.
function minmax(n1,n2,n3){
console.log(`Lowest number is ${Math.min(n1,n2,n2)} and Highest value is ${Math.max(n1,n2,n3)}`);
}

minmax(2,16,8);

// *Conditionals*
//Create a function that returns heads or tails randomly and as fairly as possible. Call the function.
// function flipflip(){
//     return Math.random()<0.5 ? 'heads' :'tails';
// }
// flipflip();

const flipresult=(()=>Math.random()<0.5 ?'heads' :'tails');

//*Loops*
//Create a function that takes in a number. Console log the result of heads or tails using the previous function x times where x is the number passed into the function. Call the function.
function flipflipcount(x){
    for(let i=1;i<=x;i++){
        console.log(flipresult());
    }
}
flipflipcount(10);