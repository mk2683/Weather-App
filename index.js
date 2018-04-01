let request = require("request");
let argv = require("yargs").argv;

let apiKey = '429c2c4f70180f246a30f0ad0e4d8fa3';
let city = argv.c || 'new delhi';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`


request(url, function (err, response, body) {
		if (err) {
		console.log('error:', error);
	} else{
		let weather = JSON.parse(body);
		// let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
		let message = ` {
			city: ${weather.name},
			cordinate: ${weather.coord.lon} ${weather.coord.lat},
			temperature: ${weather.main.temp},
			pressure: ${weather.main.pressure},
			weather condition: ${weather.weather[0].main},
			wind speed: ${weather.wind.speed} km/h ;
		} `
		console.log(message);
	};
}) ;

