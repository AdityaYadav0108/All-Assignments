const currDate = new Date();
const year = currDate.getFullYear();
const month = currDate.getMonth() + 1;
const date = currDate.getDate();
const day = currDate.getDay();
console.log(day);


const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"  ]


const padzeros = (value) => {
    return value<10 ? '0' + value : value
} 

const fullDate = `${padzeros(date)}/${padzeros(month)}/${year}`;


const showDate = document.getElementById("showDate");
showDate.textContent = fullDate;

const showDay = document.getElementById("showDay");
showDay.textContent = daysOfWeek[day];


const fnInput = document.getElementById("fnInput");
const lnInput = document.getElementById("lnInput");
const nameText = document.getElementById("nameText");


const getUserInput = () => {
    const firstName = fnInput.value.trim();
    const lastName = lnInput.value.trim();
    if(lastName == "" || firstName == ""){
        alert("please enter your name");
        return;
    }
    nameText.classList.toggle("namecolor");
    nameText.textContent = "Hi There, " + firstName + " " + lastName;
}

const fnumInput = document.getElementById("fnumInput");
const snumInput = document.getElementById("snumInput");
const operationInput = document.getElementById("operation");
const numText = document.getElementById("numText");

const calculate = () => {
    const firstNum = parseFloat(fnumInput.value);
    const secondNum = parseFloat(snumInput.value);
    const operation = operationInput.value;
    switch(operation){
        case "addition":
            numText.textContent = "Result is " + (firstNum + secondNum);
            numText.classList.toggle("numcolor");
            break;
        case "substract":
            numText.textContent = "Result is " + (firstNum-secondNum);
            numText.classList.toggle("numcolor");
            break;
        case "multiply":
            numText.textContent = "Result is " + (firstNum*secondNum);
            numText.classList.toggle("numcolor");
            break;
        case "division":
            numText.textContent = "Result is " + (firstNum/secondNum);
            numText.classList.toggle("numcolor");
            break;
        default:
            numText.textContent = "Please Choose One Operation";
    }
}