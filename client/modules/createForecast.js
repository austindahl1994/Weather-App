import Forecast from "../classes/Forecast.js";

function addElement(type, content, card) {
    const element = document.createElement(type);
    element.textContent = content;
    card.appendChild(element);
}

function createCard(forecast, card) {
    let forecastElement = document.querySelector('#forecast-container');
    addElement('p', forecast.shortDetails, card);
    addElement('p', forecast.longDetails, card);
    addElement('p', forecast.isDay, card);
    addElement('p', forecast.name, card);
    addElement('p', forecast.precipitationPercent, card);
    addElement('p', forecast.temp, card);
    addElement('p', forecast.windDirection, card);
    addElement('p', forecast.windSpeed, card);
    forecastElement.appendChild(card);
}

async function createForecast(data) {
    if (!Array.isArray(data)) {
        console.log('Not an array of daily forecasts!');
    }

    const forecastContainer = document.querySelector('#forecast-container');
    forecastContainer.innerHTML = '';
    data.forEach(day => {
        const forecast = new Forecast(
            day.shortForecast,
            day.detailedForecast,
            day.isDaytime,
            day.name,
            day.probabilityOfPrecipitation.value,
            day.temperature,
            day.windDirection,
            day.windSpeed
        );
        const card = document.createElement('div');
        card.classList.add('card');
        createCard(forecast, card);
    })
}

export default createForecast;