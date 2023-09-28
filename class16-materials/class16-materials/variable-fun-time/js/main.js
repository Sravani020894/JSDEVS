//--- Easy
//create a variable and assign it a number
let num = 40;

//minus 10 from that number
num = num - 10;
//print that number to the console
console.log(num);

//--- Medium
//create a variable that holds a value from the input
let input = document.querySelector('#danceDanceRevolution').value;

//add 25 to that number
input = input + 25;
//alert that number
console.log(input);
//--- Hard
//create a variable that holds the h1
const h1 = document.querySelector("h1");
console.log(h1);

//add an event listener to that element that console logs the sum of the two previous variables
h1.addEventListener('click',sum)
function sum(){
    console.log(num+parseInt(input));
}