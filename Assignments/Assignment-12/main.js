const taskList = document.getElementById("list");
const input = document.getElementById("input");


document.addEventListener("DOMContentLoaded", () => {
    const storedItems = JSON.parse(localStorage.getItem("tasks"));
    storedItems.forEach(element => {
        getElementsWithContent(element);
    });
})

const add = () => {
    const inputVal = input.value;
    if(input.value == ""){
        alert("Please Fill The Field First");
        return;
    }
    createDiv();
    input.value = "";
    updateLocalStorage();
}



const createDiv = () => {
    let newElement = document.createElement("div");
    newElement.className = "item";
    taskList.appendChild(newElement);
    
    getElements(newElement);
}

const getElements = (newElement) => {
    
    let para = document.createElement("p");
    para.className = "content";
    para.textContent = input.value;
    newElement.appendChild(para);

    let icon1 = document.createElement("img");
    icon1.src = "images/tick_159641.png"
    icon1.className = "icons";
    icon1.onclick = function () {done(this)};
    newElement.appendChild(icon1);

    let icon2 = document.createElement("img");
    icon2.src = "images/trash_8357206.png"
    icon2.className = "icons";
    icon2.onclick = function () {del(this)};
    newElement.appendChild(icon2);

}

const getElementsWithContent = (content) => {

    let newElement = document.createElement("div");
    newElement.className = "item";
    taskList.appendChild(newElement);
    
    let para = document.createElement("p");
    para.className = "content";
    para.textContent = content;
    newElement.appendChild(para);

    let icon1 = document.createElement("img");
    icon1.src = "images/tick_159641.png"
    icon1.className = "icons";
    icon1.onclick = function () {done(this)};
    newElement.appendChild(icon1);

    let icon2 = document.createElement("img");
    icon2.src = "images/trash_8357206.png"
    icon2.className = "icons";
    icon2.onclick = function () {del(this)};
    newElement.appendChild(icon2);
}

const done = (target) => {
    target.parentNode.firstChild.classList.toggle("finished");
}

const del = (target) => {
    target.parentNode.remove();
    updateLocalStorage();
}

const updateLocalStorage = () => {
    const tasks = Array.from(taskList.children).map((task) => {return task.firstChild.textContent});
    localStorage.setItem("tasks", JSON.stringify(tasks));
}