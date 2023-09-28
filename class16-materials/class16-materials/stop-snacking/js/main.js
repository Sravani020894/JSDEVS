//Create a function that grabs the number of snacks from the input and tells you to stop that many times
document.querySelector('#help').addEventListener('click',stop)
function stop(){
    let count = parseInt(document.querySelector('#input').value);
    document.querySelector('#stops').innerText=" ";

    for (let i=1; i<=count; i++){
        document.querySelector('#stops').innerText+=`please stop for ${i} time \n`
    }
}