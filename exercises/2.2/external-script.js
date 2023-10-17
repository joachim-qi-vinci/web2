const dateTimeNow = new Date();
console.log(dateTimeNow.toLocaleDateString()); // 17/08/2020
console.log(dateTimeNow.toLocaleTimeString()); // 13:26:15

let counter = 0;
let text = document.querySelector(".text");


function addDateTime(message){
    let string = dateTimeNow.toLocaleDateString() + " " + dateTimeNow.toLocaleTimeString() + " : "+ message;
    return string;
}

alert(addDateTime("Blabla"));




window.addEventListener('click', addclick);

function addclick(){
    counter++;
    text.textContent = 'Compteur de click' + counter;
    
if (counter === 5){
    text.textContent = 'Bravo bel échauffement';
}
if (counter === 10){
    text.textContent = "Vous etes le maitre"
}
    
}