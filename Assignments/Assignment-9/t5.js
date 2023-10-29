const t5input = document.getElementById("t5input");
const t5display = document.getElementById("t5display");

const init5 = () => {
    event.preventDefault();
    modifyString2();
}

const modifyString2 = () => {
    const str = t5input.value;
    if(str==""){
        alert("Please Fill The Following Field With A String");
        return;
    }else if(str.length<3){
        displayString(str);
        return;
    }else{
        const first = str.slice(0,3);
        const last = str.slice(str.length-3, str.length);
        displayString(first + last);
        return;
    }
}

const displayString = (str) => {
    t5display.textContent = str;
    t5display.classList.add("unvanish", "bg");
}