const btn = document.querySelector("#start-btn");
const text = document.querySelector("#spanText");
const text2 = document.querySelector("#spanText2");


btn.addEventListener("mouseover", startTimer);
window.addEventListener("click", addClick);

let timerID;
const timerS = 5;
const timerMs = timerS *1000;
let cpmt= 0;

function startTimer(){
    startTime = new Date();
    text.innerText = "Commencons !";
    
    timerID = setTimeout(()=>{
        text.innerText = "Game over, you did not click 10 times within 5s !";
    }, timerMs);
}

function addClick(){
    const spend = new Date().getTime() - startTime.getTime();
    cpmt ++;
    if (cpmt === 10){
        text.innerText = 'You win ! You clicked 10 times within ' + spend / 1000 + 's';
        clearTimeout(timerID);
    }
}