const loadingText = document.getElementById("loadingText");
const loader = document.getElementById("loader");
const internetStatus = document.getElementById("internetStatus");


document.addEventListener("DOMContentLoaded",() => {
    if(navigator.onLine){
        internetStatus.textContent = "You are currently ONLINE!!!";
        internetStatus.style.background = "green";
    }else{
        internetStatus.textContent = "You are currently OFFLINE!!!";
        internetStatus.style.background = "red";
    }
    setTimeout(() => {
        loader.style.display = "none";
        loadingText.textContent = "Please Make Sure You Enable Pop-ups For This Page, Enjoy... :D"
        window.open('form.html', 'Popup', 'height=850, width=700, screenX=500, screenY=500')
    }, 10000);
})

window.addEventListener("online", () => {
    internetStatus.textContent = "You Are Currently ONLINE!!!!";
    internetStatus.style.background = "green";
    console.log("online");
})
window.addEventListener("offline", () => {
    internetStatus.textContent = "You Are Currently OFFLINE!!!!";
    internetStatus.style.background = "red";
    console.log("offline");
})
