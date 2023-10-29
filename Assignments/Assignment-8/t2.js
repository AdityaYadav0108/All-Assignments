const t2display1 = document.getElementById("t2display1");
const t2display2 = document.getElementById("t2display2");
const a1 = document.getElementById("a1");

const arraySize = () => {
    event.preventDefault();
    let n = 0;
    while(true){
      n = parseFloat(prompt("Please Enter The Size Of The Array"));
      if(!isNaN(n)){
        break;
      }
      alert("Please Enter A Valid Input");
    }
    console.log(n);
    getArray(n);
}
const getArray = (n) => {
  let count = 0;
  let myArray = [];

  while(count<n){
    const getInput = parseFloat(prompt("Please Enter Array Element"));
    if(!isNaN(getInput)){
      let aValue = parseFloat(getInput);
      myArray.push(aValue)
      count++;
    }else{
      alert("Please Enter A Valid Number");
    }
  }
  console.log(`Original Array ${myArray}`);
  copyArray(myArray);
}

const copyArray = (arr1) => {
  let copiedArray = [];

  arr1.forEach((e) => {
    copiedArray.push(e);
  })

  console.log(`Copied Array ${copiedArray}`);
  changeDisplay(arr1, copiedArray);
}

const changeDisplay = (arr1, arr2) => {
    a1.textContent = "Click Here To Start Over";
    t2display1.textContent = `Original Array : ${arr1}`;
    t2display2.textContent = `Copied Array : ${arr2}`;

    t2display1.classList.add("unvanish", "bg");
    t2display2.classList.add("unvanish", "bg");
}
