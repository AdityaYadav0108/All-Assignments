const t4input = document.getElementById("t4input");
const t4display = document.getElementById("t4display");

const people = [
    { name: "Ashish", age: 23 },
    { name: "Ajay", age: 21 },
    { name: "Arvind", age: 26 },
    { name: "Mahesh", age: 28 },
    { name: "Jay", age: 19 }
  ];

const init4 = (event) => {
    event.preventDefault();
    processInput4(t4input.value);
}


const processInput4 = (input) => {
    const newArr = people.map(function(curr){
        switch (input){
            case "name" :
                return curr.name;
            case "age" :
                return curr.age;
            default:
                return curr;
        }
    });
    console.log(newArr);
    displayOutput(newArr, input);
}

const displayOutput = (newArr, input) => {
    switch(input){
        case "name":
            t4display.textContent = `The name properties are : ${newArr}`;
            t4display.classList.add("unvanish","bg");
            break;
        case "age":
            t4display.textContent = `The age properties are : ${newArr}`;
            t4display.classList.add("unvanish","bg");
            break;
        default:
            t4display.textContent = `Invalid Input`;
            t4display.classList.add("unvanish","bg");
    }
}