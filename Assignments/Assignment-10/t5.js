const t5display = document.getElementById("t5display");
const people2 = [
    { name: "Jay", age: 19 },
    { name: "Ajay", age: 21 },
    { name: "Arvind", age: 26 },
    { name: "Mahesh", age: 28 },
    { name: "Ashish", age: 23 }
  ];

const init5 = () => {
    event.preventDefault();
    filterObject();
}
const filterObject = () => {
    let filteredArr = people.filter(function(curr){
        return curr.age<25;
    })
    let sortedArr = filteredArr.sort(function(a,b){
        return b.age-a.age;
    })
    console.log(sortedArr);
    
    let mappedArr = sortedArr.map(function(curr){
        return curr.age;
    })
    displayOutput5(mappedArr);
}

const displayOutput5 = (arr) => {
    t5display.textContent = `Result: ${arr}, \n You can also check the console for a more structured output.`;
    t5display.classList.add("unvanish", "bg");
}
