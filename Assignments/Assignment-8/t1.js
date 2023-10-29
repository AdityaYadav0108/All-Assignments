const t1Input = document.getElementById("t1Input");
const t1Display = document.getElementById("t1Display"); 

const removeSpace = () => {
  event.preventDefault();
  let str = t1Input.value.trim();
  t1Display.textContent = str;
  if(str!=""){
    t1Display.classList.add("unvanish", "bg");
  }
}