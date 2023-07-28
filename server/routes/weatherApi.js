import fetch from "node-fetch";

const gridApi = 'https://api.weather.gov/points/'
//https://api.weather.gov/points/{latitude},{longitude}

const pointApi = 'https://api.weather.gov/gridpoints';
//https://api.weather.gov/gridpoints/{office}/{grid X},{grid Y}/forecast


//https://www.weather.gov/nwr/wfo_nwr - weather office locations
export async function weatherApp(lon, lat, email) {
    try {
        const headers = new Headers({
            'User-Agent' : JSON.stringify(email)
        });
        
        console.log(`The test was: ${gridApi}${lat},${lon}`);
        const gridResponse = await fetch(`${gridApi}${lat},${lon}`, {
            headers: headers
        });
        const gridData = await gridResponse.json();
        //console.log(`Information received was: ${JSON.stringify(gridData)}`);
        //console.log(`Grid coords are: ${gridData.properties.gridX},${gridData.properties.gridY}`);
        //console.log(`Api is: ${pointApi}/${gridData.properties.gridId}/${gridData.properties.gridX},${gridData.properties.gridY}/forecast`);
        const forecastResponse = await fetch(
            `${pointApi}/${gridData.properties.gridId}/${gridData.properties.gridX},${gridData.properties.gridY}/forecast`,
        {
            headers: headers
        });
        const weatherData = await forecastResponse.json();
        return weatherData;
    } catch (error) {
        throw error;
    }
}

