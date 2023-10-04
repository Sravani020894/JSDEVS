// *Variables*
// Declare a variable, assign it a boolean, and alert the value
var a=false;
alert(a);

// Declare a variable, reassign it to your favorite color, and console log the value
var b = red;
b=violet;

console.log(b);

// *Functions*
// Create a function that takes in 4 numbers and returns the sum of the first 3 numbers divided by the fourth. Return the result. Call the function.
function cal(n1,n2,n3,n3){
    let result = (n1+n2+n3)/n4;
    return result;
}

cal(1,2,3,4);

// Create a function that takes in 2 numbers. Console log the first number to the power of the second. Call the function.
function power(n1,n2){
    let result = Math.pow(n1,n2);
    console.log(result);
}

power(2,3);

// *Conditionals*
// Create a function that takes in a boolean and a string. If the boolean is true, alert the string. If the boolean is false, console log the string

function conditionals(b,s){
    if( b === true)
        alert(s);
    else
        console.log(s);
    
        (b === true)?alert(s):console.log(s);
}

//*Loops*
//Create a function that takes in a number. Console log all values from 1 to that number, but if the number is divisible by 3 log "fizz" instead of that number, if the number is divisible by 5 log "buzz" instead of the number, and if the number is divisible by 3 and 5 log "fizzbuzz" instead of that number
 function fizzbuzz(n1){
    for (let i=1;i<=n1;i++){
        if(n1 % 3 === 0 && n1 % 5 === 0)
        console.log("fizzbuzz");
    else if(n1 % 5 === 0)
        console.log('buzz');
    else if(n1 % 3 === 0)
        console.log('fizz');
    else
        console.log(n1);
    }
 } 
fizzbuzz(15);