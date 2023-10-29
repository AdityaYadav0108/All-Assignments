const t1Input = document.getElementById("t1input");
const t1display = document.getElementById("t1display");

const init1 = () => {
    event.preventDefault();
    judgeInput();
}

const judgeInput = () => {
    const input1 = parseFloat(t1Input.value);
    if(!isNaN(input1)){
        getInput(input1); 
        return;
    }
    alert("Please Enter a Valid Input");
}

const getInput = (n) => {
    let count = 0;
    let arr = [];
    while (count<n){
        const inputPrompt1 = parseFloat(prompt("Please Enter The Number You Want To Be Added"));
        if(!isNaN(inputPrompt1)){
            arr.push(inputPrompt1);
            count++;
        }else{
            alert("Please Enter a Valid Input");
        }
    }
    console.log(arr)
    add(...arr);
}

const add = (...args) => {
    console.log(args);
    let sum = 0;
    for(const arg of args){
        sum+=arg;
    }
    console.log(sum);
    display1(sum);
}

const display1 = (sum) => {
    t1display.textContent = `The Sum Is ${sum}`;
    t1display.classList.add("unvanish", "bg");
}
