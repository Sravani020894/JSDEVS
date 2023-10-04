// *Variables*
// Declare a variable, reassign it to your favorite food, and alert the value
let food = "chapati";
food = "roti";
alert(food);
//Declare a variable, assign it a string, alert the second character in the string (Use your google-fu and the MDN)
let show = "sravani";
alert(show.charAt(1));

// *Functions*
// Create a function that takes in 3 numbers. Divide the first two numbers and multiply the last. Alert the product. Call the function.
function cal(n1,n2,n3){
    let result = ((n1/n2)*n3);
    alert(result);
}
cal(6,3,2);

// Create a function that takes in 1 number. Console log the cube root of the number. Call the function.
function cuberoot(n1){
    console.log(Math.cbrt(n1));
}
cuberoot(8);

// *Conditionals*
//Create a function that takes in a month. If it is a summer month alert "YAY". If another other month, alert "Booo"

function seasonfinder(mon){
    month = mon.toUpperCase();
    if(month === "MAY" || "JUNE" || "JULY" || "AUGUST")
        alert("YAY");
    else
        alert("Boooo");
}
seasonfinder("AUGUST");

//*Loops*
//Create a function that takes in a number. Console log every number from 1 to that number while skipping multiples of 5.

function multiples(n){
    for(let i=1;i<=n;i++){
        if(n%5 !== 0)
          console.log(i);
    }       
}
multiples(16);