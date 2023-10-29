const displayText = document.getElementById("displayText");
const initButton = document.getElementById("initButton");
let count = 0;

const init = () => {
    count = 0;
    guessGame();
}

const guessGame = () => {

    const computer = numberGenerator();

    for(let i=1; i<=3; i++){
        const user = userInput();
        if(user==computer){
            displayText.textContent = "Yay! You Guessed It Right";
            if(!displayText.classList.contains("displaybg")){
                displayText.classList.add("displaybg");
            }
            count=1;
            break;
        }
    }
    if(count == 0){
        displayText.textContent = "Looks like you lost :(";
        if(!displayText.classList.contains("displaybg")){
            displayText.classList.add("displaybg");
        }
    }
    initButton.textContent = "Click Here To Play Again";
}

const userInput = () => {
    const inputPrompt = prompt("Please Enter A Number Between 1 to 10");
    console.log(parseFloat(inputPrompt));
    return parseFloat(inputPrompt);
}
 
const numberGenerator = () => {
    const randomNumber = Math.floor(Math.random() * 10) + 1;
    console.log(randomNumber)
    return randomNumber;
}
