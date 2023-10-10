const dateTimeNow = new Date();
console.log(dateTimeNow.toLocaleDateString()); // 17/08/2020
console.log(dateTimeNow.toLocaleTimeString()); // 13:26:15

function addDateTime(message){
    let string = dateTimeNow.toLocaleDateString() + " " + dateTimeNow.toLocaleTimeString() + " : "+ message;
    return string;
}

alert(addDateTime("Blabla"));