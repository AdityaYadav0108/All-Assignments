const t1display1 = document.getElementById("t1display1");
const t1display2 = document.getElementById("t1display2");

const person = {
    name: "aditya"
}

const introduction = function(age, study) {
    return `Hi My Name Is ${this.name}, I am ${age} and I am Currently Studying ${study}.`;
}

const callText = introduction.call(person, 23, "frontend");
const applyText = introduction.apply(person, [23, "frontend"]);


const  init = () => {
    event.preventDefault();
    t1display1.textContent = "Call: " + callText;
    t1display2.textContent = "Apply: " + applyText;
    t1display1.classList.add("unvanish", "bg");
    t1display2.classList.add("unvanish", "bg");
}
