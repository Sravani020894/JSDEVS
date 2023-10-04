// Create a function that takes in an array. If the first number, is less than the last number, alert "Hi". If the first number is greater than the last number, alert "Bye". If they are equal, alert "We close in an hour".
function greetings(arr){
    let len=arr.length-1;
    if(arr[0]==arr[len])
        console.log("we close in an hour");
    else if(arr[0]<arr[len])
        console.log("Hi");
    else if(arr[0]>arr[len])
        console.log("Bye");
}
