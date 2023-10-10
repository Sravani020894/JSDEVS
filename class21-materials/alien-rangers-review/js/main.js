//Arrays

//Create and array of tv shows. Loop through and print each show to the console
const TVSHOWS = ["DDJ","OneTwo","GOT"];
for (let i=0;i<TVSHOWS.length;i++){
    console.log(TVSHOWS[i]);
}

//Create and array of numbers
//Return a new array of numbers that includes every even number from the previous Arrays
const NUMBERS = [1,2,3,4,5,6,7,8,9];
// const newNUMBER1=[];
// NUMBERS.forEach((item) => {
//     if((item%2)===0)
//     newNUMBER1.push(item);
//     console.log(newNUMBER1);
//     }
   
// )

const evenarr = arr => arr.filter((n)=> n % 2 ===0 );
console.log(evenarr(NUMBERS));

//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
// function Secondlowhigh(N){
//     let max=Math.min(N);
//     let min=Math.min(N);
//     N.splice(N.indexOf(max),1);
//     N.splice(N.indexOf(min),1);
//     console.log(`2nd MIN is ${Math.min(N)} and 2nd MAX is ${Math.min(N)}`);

// }
function summinmax(n){
    let sorted = n.sort((a,b) => a-b);
    alert(sorted[1]+sorted[n.length-2]);
}
summinmax([25,15,36,73,32,74,84]);