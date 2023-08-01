export default class Forecast {
    constructor(shortDetails, longDetails, isDay, name, precipitationPercent, temp, windDirection, windSpeed) {
        this.shortDetails = shortDetails;
        this.longDetails = longDetails;
        this.isDay = isDay;
        this.name = name;
        this.precipitationPercent = precipitationPercent;
        this.temp = temp;
        this.windDirection = windDirection;
        this.windSpeed = windSpeed;
    }

    createCard() {

    }

    createElement() {
        this.parseText("some string"); //
    }

    setBackground() {

    }

    parseText() {

    }
    // add images that I make myself? GIFs?
    //parse and add new classes to elements
    //check for percip chance, if null
    //images for wind speed, precip chance, weather, wind direction
}