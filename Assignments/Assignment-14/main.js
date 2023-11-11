const countrySelect = document.getElementById("countrySelect");


const url = "https://disease.sh/v3/covid-19/countries";

async function setCountry() {
    const data  = await getData();
    const countries = data.map((e)=>{
        return e.country;
    })
    await countries.array.forEach(element => {
        countrySelect.createElement("option")
    });
    return countries;
}

async function getData(){
    const response = await fetch(url);
    const data = await response.json();
    return data;
}

async function start() {
    console.log(await setCountry());
}
start();

