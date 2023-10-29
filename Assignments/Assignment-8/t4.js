const t4Input = document.getElementById("t4Input");
const t4display = document.getElementById("t4display");

const sortString = (event) => {
    event.preventDefault();

    let str = t4Input.value.trim();
    if(str==""){
        alert("Please Enter Valid Inputs");
    }
    let sortedString = str.split('').sort((a,b) => b.localeCompare(a)).join('');
    console.log(sortedString);
    t4display.textContent = sortedString;
    if(str!=""){
        t4display.classList.add("bg", "unvanish");
    }
}