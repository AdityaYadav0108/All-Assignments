const t2input = document.getElementById("t2input");
const t2display = document.getElementById("t2display");

const init2 = () => {
    event.preventDefault();
    judgeInput();
}

const judgeInput = () => {
    const input2 = parseFloat(t2input.value);
    if(!isNaN(input2)){
        getInput(input2); 
        return;
    }
    alert("Please Enter a Valid Input");
}

const getInput = (n) => {
    let count = 0;
    let arr = [];
    while (count<n){
        const inputPrompt2 = parseFloat(prompt("Please Enter The Array Elements"));
        if(!isNaN(inputPrompt2)){
            arr.push(inputPrompt2);
            count++;
        }else{
            alert("Please Enter a Valid Input");
        }
    }
    console.log(arr)
    cube(...arr);
}

const cube = (...args) => {
    console.log(args);
    let count = 0;
    let newArr = [];
    for(const arg of args){
        newArr.push(Math.pow(arg, 3));
    }
    console.log(newArr);
    display2(newArr);
}

const display2 = (arr) => {
    t2display.textContent = `The New Array Is ${arr}`;
    t2display.classList.add("unvanish", "bg");
}