const request = require("request");
const readline = require("readline");

const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

rl.question("Enter location: ", (location) => {
    request(`https://api.mapbox.com/geocoding/v5/mapbox.places/${location}.json?access_token=pk.eyJ1IjoibXVua2h6dWwxIiwiYSI6ImNrdWk2czI5cTFhZDIyd3Q5OXhvcWIwNTIifQ.o65kzaqtL2jRj0NY7NBRcQ`,
    (err,res,body) => {
        const data = JSON.parse(body);
        console.log(`${location}'s Longitude: ${data.features[0].geometry.coordinates[0]}, Latitude: ${data.features[0].geometry.coordinates[1]}`)

        const options = {
            method: "GET",
            url: "weather apigaa oruul",
            qs: {lon: longit, lat: latitude}
        }

        request(options, (err,res,body) =>{
            console.log(res)
        })

    });
    rl.close();
})