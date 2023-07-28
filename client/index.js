import search from "./modules/search.js";
import serverTest from "./modules/serverCheck.js";
import createForecast from "./modules/createForecast.js";

serverTest();

let searchButton = document.querySelector('#searchButton');
let searchText = document.querySelector("#search");

function clearSearch() {
    document.querySelector("h1").innerHTML = searchText.value;
    searchText.value = '';
}

async function processCity(city) {
    try {
        let array = await search(city);
        createForecast(array);
    } catch (error) {
        console.error("Error occurred when attempting to search");
    } finally {
        clearSearch();
    }
}

searchButton.addEventListener('click', () => {
    processCity(searchText.value);
});

document.querySelector("#search").addEventListener('keypress', (event) => {
    if (event.key === "Enter") {
        event.preventDefault();
        processCity(searchText.value);
    }
});





