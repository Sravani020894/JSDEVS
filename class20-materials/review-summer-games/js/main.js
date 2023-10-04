//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function multi(arr){
    let product=1;
    arr.forEach((x)=>(product*=x));
    alert(product);
}
multi([2,7,3]);