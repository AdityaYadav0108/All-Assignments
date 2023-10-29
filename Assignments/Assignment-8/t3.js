const studentInput =  document.getElementById("studentInput");
const minMarks = document.getElementById("minMarks");
const t3display = document.getElementById("t3display");

const getValue = (event) => {
    event.preventDefault();
    const studentCount = parseFloat(studentInput.value);
    const threshhold = parseFloat(minMarks.value);
    if(!isNaN(studentCount) && !isNaN(threshhold)){
        getArray2(studentCount, threshhold);
    }else{
        alert("Please Enter Valid inputs");
    }
}
    



const getArray2 = (n, m) => {
    let count = 0;
    let myArray = [];
  
    while(count<n){
      const getInput = parseFloat(prompt("Please Enter Student Marks"));
      if(!isNaN(getInput)){
        let aValue = parseFloat(getInput);
        myArray.push(aValue)
        count++;
      }else{
        alert("Please Enter A Valid Number");
      }
    }
    console.log(myArray);
    compare(myArray, m);
}

const compare = (a, b) => {
    const result = a.every(element => element>=b);
    console.log(result);
    if(!result){
        t3display.textContent = "It Seems That Some Students Have Failed :(";
    }else{
        t3display.textContent = "Congratulations, All Students Have Passed :)";
    }
    t3display.classList.add("unvanish", "bg");
}