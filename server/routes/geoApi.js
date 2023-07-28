import fetch from "node-fetch";

//https://openweathermap.org/api/geocoding-api
const api = 'http://api.openweathermap.org/geo/1.0/direct?q=';
//update state after city, and US after for only US
//morrisville,VT,US as example
export async function geoApp(city, key) {
    try {
        console.log(`${api}${city}&appid=${key}`);
        const response = await fetch(`${api}${city}&appid=${key}`);
        const data = await response.json(); 
        console.log(data);
        return data;
    } catch (error) {
        throw error;
    }
}