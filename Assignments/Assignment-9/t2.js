const t2value1 = document.getElementById("t2value1");
const t2value2 = document.getElementById("t2value2");
const t2display = document.getElementById("t2display")



const init2 = (event) => {
    event.preventDefault();
    const judgedInput = judgeInput2();
    if(judgedInput.flag == true){
        displayValues(judgedInput.val1, judgedInput.val2);
    }else{
        alert("Please Enter Valid Inputs In Both The Fields!!!");
    }
}

const judgeInput2 = () => {
    const value1 = parseFloat(t2value1.value);
    const value2 = parseFloat(t2value2.value);
    
    if(!isNaN(value1) && !isNaN(value2)){
        return{flag: true, val1:value1, val2:value2};
    }
    return {flag:false};
}

const displayValues = (val1, val2) => {
    t2display.textContent = `First Value: ${val1}, Second Value: ${val2}. These Values Were Printed After Being Returned From The Same Function`;
    t2display.classList.add("unvanish", "bg");
}
