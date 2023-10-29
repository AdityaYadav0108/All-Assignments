
const person = {
    name1:"John Doe",
    age: 43,
    address: {
        city: "Manhattan",
        state: "New York",
        pincode: 201005
    },
    hobby: "singing"
}

const nameInput = document.getElementById("nameInput");
const ageInput = document.getElementById("ageInput");
const cityInput = document.getElementById("cityInput");
const stateInput = document.getElementById("stateInput");
const pinInput = document.getElementById("pinInput");
const hobbyInput = document.getElementById("hobbyInput");

const h2 = document.getElementsByTagName("h2");
const p = document.getElementsByTagName("p");

const showName = document.getElementById("showName");
const showAge = document.getElementById("showAge");
const showAdd = document.getElementById("showAdd");
const showHobby = document.getElementById("showHobby");

const nameHead = document.getElementById("nameHead");
const ageHead = document.getElementById("ageHead");
const addHead = document.getElementById("addHead");
const hobbyHead = document.getElementById("hobbyHead");


const init = () => {
    if(nameInput.value == "" || ageInput.value == "" || cityInput.value == "" || stateInput.value == "" || pinInput.value == "" || hobbyInput.value == ""){
        alert("Please fill all the fields to proceed :)")
    }else{
        unvanish();
        event.preventDefault();
        const newPerson ={
            name1: nameInput.value,
            age: ageInput.value,
            address: {
            city: cityInput.value,
            state: stateInput.value,
            pincode: pinInput.value,
        },
        hobby: hobbyInput.value
        };

        showName.textContent = newPerson.name1;
        showAge.textContent = newPerson.age;
        showAdd.textContent = `${newPerson.address.city}, ${newPerson.address.state}, ${newPerson.address.pincode}`;
        showHobby.textContent = newPerson.hobby;
    }
}

const unvanish = () => {
    nameHead.classList.add("h2Unvanish");
    ageHead.classList.add("h2Unvanish");
    addHead.classList.add("h2Unvanish");
    hobbyHead.classList.add("h2Unvanish");

    showName.classList.add("pUnvanish");
    showAge.classList.add("pUnvanish");
    showAdd.classList.add("pUnvanish");
    showHobby.classList.add("pUnvanish");
}

