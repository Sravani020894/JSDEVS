//---Easy
//create a function that subtracts two numbers and alerts the difference
function sub(n1,n2){
    let result= n1 - n2;
    alert(result);
}

//create a function that divides three numbers and console logs the quotient
function div(n1,n2,n3){
    let result = (n1/n2)/n3;
    console.log(result);
}

//create a function that multiplys three numbers and returns the product
function mul(n1,n2,n3){
    let result=(n1*n2*n3);
    return result;
}
console.log(mul(3,2,4));
//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function adddiv(n1,n2,n3){
    let result=(n1+n2)%n3;
    return result;
}
//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function hard(n1,n2,n3,n4){
    let result = n1*n2;
    if(result > 100)
        console.log(n3+n4);
    else if(result < 100)
        console.log(n3 - n4);
    else if(result = 100)
        console.log((n1*n2*n3)%n4);
}