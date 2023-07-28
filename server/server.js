import express from 'express';
import cors from 'cors';
import * as dotenv from 'dotenv';
import { geoApp } from './routes/geoApi.js';
import { weatherApp } from './routes/weatherApi.js'
dotenv.config();

let key = process.env.WEATHER_API_KEY;
let email = process.env.EMAIL;

//http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&appid={API key}
const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send({message: "Node server is running"});
})

app.post('/api', async (req, res) => {
    const data = req.body;
    //console.log(`Data sent was: ${data.city}`);
    try {
        const geoData = await geoApp(data.city, key);
        const weatherData = await weatherApp(geoData[0].lon, geoData[0].lat, email);
        res.json({
            weatherData
        });
    } catch (error) {
        console.error('error occurred when attempting API');
    }
})

app.listen(PORT, async (err) => {
    if (err) {
        throw err;
    } else {
        console.log(`app is listening on port ${PORT}`);
        //console.log(`API key is ${googleApiKey}`);
    }
})

//fetch call from front to back end, calls google maps api, turns city into long/lat
//then takes that and puts into national forecast