//Create an array of movie titles. Loop through the array and each element to the h2.
let arr = ["khushi","Janu","kumari srimathi"];
arr.forEach((value) => document.querySelector("h2").innerText+=value);

//Create an array of numbers. Loop through the array and add three to each number and replace the old number.
let num =[2,3,1,5,6,98];
num.forEach((x,i)=>(num[i]=x+3));

//Find the average of all the numbers from question two
let sum = 0;
num.forEach((x)=>sum=sum+x);
let avg=(sum/num.length);
