//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)
function mapper(num){
    let newnum = [];
    for(let i=0;i<num.length;i++){
        if(num[i]%2 === 0)
           newnum.push(num[i]);
    }
    return newnum;
}

console.log(mapper([2,5,4,7,6]));