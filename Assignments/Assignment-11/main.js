let currScore = 0;

const init = () => {
    document.getElementById("mole").style.visibility = "hidden";
    document.getElementById("mud").style.visibility = "hidden";
    document.getElementById("start").style.visibility = "hidden";
    document.getElementById("points").style.visibility = "visible";
    
    for(let i=0; i<6; i++){
        document.getElementsByClassName("dirt")[i].style.visibility = "visible";
    }

    setInterval(() => {
        let random = Math.floor(Math.random()*6)+1;
        document.getElementById("mole"+random).style.visibility = "visible";
        setTimeout(()=>{
            document.getElementById("mole"+random).style.visibility = "hidden";
        }, 900)
    }, 1000) 
}

const score = document.getElementById("score");

const clicked = () => {
    currScore++;
    score.textContent = currScore;
}