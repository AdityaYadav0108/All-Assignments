
const sumDisplay = document.getElementById("sumDisplay");
const initButton = document.getElementById("initButton");

const findSum = () => {
    let flag = true;
    let sum = 0;
    let myArray  = [];
    while(flag){
        let userInput = prompt("Please Enter A Number");
        let value = parseFloat(userInput);  
    
        if(value<0){
            flag = false;
            break;
        }
    
        myArray.push(value);
    }
    
    if(myArray.length == 0){
        sumDisplay.textContent = "You Did Not Enter The Right Inputs";
        if(!sumDisplay.classList.contains("displaybg")){
            sumDisplay.classList.add("displaybg");
        }
    }else{
        for(let a of myArray){
            sum+=a;
        }
    
        sumDisplay.textContent = `The Sum Of The Integers Is ${sum.toString()}`;
        initButton.textContent = "Click Here To Go Again";
        if(!sumDisplay.classList.contains("displaybg")){
            sumDisplay.classList.add("displaybg");
        }
    }
}

 