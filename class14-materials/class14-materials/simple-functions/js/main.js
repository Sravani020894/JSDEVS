// //create a function that adds two numbers and alerts the sum
// document.querySelector('#SUM').addEventListener('click',sum);
// function sum(){
//     let num1=document.querySelector('#n1').value;
//     let num2=document.querySelector('#n2').value;
//     let num3=document.querySelector('#n3').value;
//     typeof(num1);
//     let sum = num1 + num2 + num3;
//     console.log(sum);

// }

document.querySelector('#SUM').addEventListener('click', sum);

function sum() {
    let num1 = parseFloat(document.querySelector('#n1').value);
    let num2 = parseFloat(document.querySelector('#n2').value);
    let num3 = parseFloat(document.querySelector('#n3').value);


    if (!isNaN(num1) && !isNaN(num2) && !isNaN(num3)) {
        let result = num1 + num2 + num3;
        alert('The sum is: ' + result);
    } else {
        alert('Please enter valid numbers for addition.');
    }
}

//create a function that multiplys three numbers and console logs the product
document.querySelector('#MUL').addEventListener('click',mul);
function mul(n1,n2,n3){
    let num1=document.querySelector('#n1').value;
    let num2=document.querySelector('#n2').value;
    let num3=document.querySelector('#n3').value;
    let mul=(num1*num2*num3);
    console.log(mul);
}
//create a function that divides two numbers and returns the ???
document.querySelector('#DIV').addEventListener('click',div);
function div(n1,n2){
    let num1=document.querySelector('#n1').value;
    let num2=document.querySelector('#n2').value;
    let num3=document.querySelector('#n3').value;
    let div=(num1/num2);
    console.log(div);
}