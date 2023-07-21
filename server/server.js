const express = require('express');
const cors = require('cors');
require('dotenv').config();

googleApiKey = process.env.GOOGLE_API_KEY;

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {

})

app.listen(PORT, (err) => {
    if (err) {
        throw err;
    } else {
        console.log(`app is listening on port ${PORT}`);
        console.log(`API key is ${googleApiKey}`);
    }
})

//fetch call from front to back end, calls google maps api, turns city into long/lat
//then takes that and puts into national forecast