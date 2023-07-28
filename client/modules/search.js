async function search(city) {
    try {
        const response = await fetch('http://localhost:3000/api', {
            method: 'POST',
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify({'city': city})
        });
        const data = await response.json();
        //console.log(data);
        return data.weatherData.properties.periods;
    } catch (error) {
        console.error(`Error during search: ${error}`);
        return [];
    }
}

export default search;
