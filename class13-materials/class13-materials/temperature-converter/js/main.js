//Write your pseduo code first! 
document.querySelector('#convert').addEventListener('click',convert);

function convert(){
    const Temp = document.querySelector('#celsius').value;
    const fahrenheit = (Temp*9/5)+32;
    document.querySelector("#showit").innerText = fahrenheit;
    const yell=new SpeechSynthesisUtterance(fahrenheit);
    window.speechSynthesis.speak(yell);
}
