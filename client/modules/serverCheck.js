async function serverTest() {
    try {
        (async () => {
            const response = await fetch('http://localhost:3000');
            const data = await response.json();
            console.log(data);
        })();
    } catch (err) {
        throw err;
    }
}

export default serverTest;
