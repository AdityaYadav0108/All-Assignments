const t3input = document.getElementById("t3input");
const t3display = document.getElementById("t3display");
let counter;
let intervalId;

const init3 = () => {
    counter=1;
    event.preventDefault();
    judgeInput3();
}

const judgeInput3 = () => {
    const input3 = parseFloat(t3input.value);
    if(!isNaN(input3)){
        startInterval(input3); 
        return;
    }
    alert("Please Enter a Valid Input");
}

const processInput = (input) => {
    t3display.textContent = `Function Called : ${counter}`;
    t3display.classList.add("unvanish", "bg");
    console.log("function called");
    counter++;

    if(counter>input){
        clearInterval(intervalId);
        t3display.textContent = `Finished`;
    }   
}

const startInterval = (input) => {
    intervalId = setInterval(() => processInput(input), 3000);
}

