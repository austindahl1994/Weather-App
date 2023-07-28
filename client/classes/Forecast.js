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
}