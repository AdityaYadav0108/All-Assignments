const t4input = document.getElementById("t4input");
const t4display = document.getElementById("t4display");

const init4 = () => {
    event.preventDefault();
    modifyString();
}

const modifyString = () => {
    let str = t4input.value;
    if(str == ""){
        alert("Please Fill The Respective Fields First!!!!")
    }else if(str.indexOf("New!") == 0){
        t4display.textContent = str;
        t4display.classList.add("unvanish", "bg");
    }else{
        t4display.textContent = "New!" + str;
        t4display.classList.add("unvanish", "bg");
    }
}



