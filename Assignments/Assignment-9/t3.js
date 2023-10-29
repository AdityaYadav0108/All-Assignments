const t3input = document.getElementById("t3input");
const t3display = document.getElementById("t3display");

function addition() {
    let a=5;
    let b=6;
    let result;

    return result = a+b;
}

function multiplication(){
    let a = 5;
    let b = 6;
    let result;

    return result = a*b;
}

function division() {
    let a = 10;
    let b = 5;
    let result;

    return result = a/b;
}

function substraction(){
    let a = 10;
    let b = 5;
    let result;

    return result = a - b;
}

const init3 = () => {
    event.preventDefault();
    displayValues2(evaluate());
}

const evaluate = () => {
    let a = t3input.value;

    switch(a){
        case "addition":
            console.log(addition);
            return addition;

        case "substraction":
            console.log(substraction);
            return substraction;

        case "multiplication":
            console.log(multiplication);
            return multiplication;

        case "division":
            console.log(division);
            return division;

        default:
            return "Please Choose a Valid Input";
    }
}

const displayValues2 = (a) => {
    t3display.textContent = a;
    t3display.classList.add("unvanish", "bg");
}


