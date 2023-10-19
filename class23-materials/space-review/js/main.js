//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let num = [4,2,3];
console.log( num.reduce( (acc,curr) => acc + curr,0 ));
//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let numsquared = num.map((x) => Math.pow(x,2));
console.log(numsquared);
//Create a function that takes string
//Print the reverse of that string to the console
function reverseastring(string){
    let rev = string.split("").reverse().join("");
    return rev;
}
reverseastring("sravani");

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(string){
    if ( string === reverseastring(string))
        console.log("given string is a palindrome");
    else
        console.log("not a palindrome");
}
palindrome("eye");