//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
let array = [3,5,7,9,2];
// let sum=0;
// array.forEach((n) => {
//    sum= sum + n;
//     console.log(sum);
// });
console.log(array.reduce((acc,current)=> acc + current,0));


//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
let sqarray = array.map(n => Math.pow(n,2));
console.log(sqarray);
//Create a function that takes string
//Print the reverse of that string to the console
function revstring(word){
    let output = word.split("").reverse().join("");
    console.log(output);
}

revstring("sravani");

//Create a function that takes in a string
//Alert if the string is a palindrome or not
function palindrome(word){
    let ultastring = word.split("").reverse().join("");
    return (word === ultastring);
}

console.log(palindrome("eye"));