const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const app = express();
const apiKey = '429c2c4f70180f246a30f0ad0e4d8fa3';

app.use(bodyParser.urlencoded({ extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
	res.render("index", {weather: null, error:null});
})

app.post("/", function(req, res){
	let city = req.body.city;
	let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
	request(url, function (err, response, body) {
		if (err) {
				res.render("index", {weather: null, error:"Error, Please try again"});
		} else{
			let weather = JSON.parse(body);

			if (weather.main == undefined) {
				res.render("index", {weather: null, error:"Error, Please try again"});
			} else{
				// let message = `It's ${weather.main.temp} degrees in ${weather.name}!`;
				let message = ` {
					city: ${weather.name},
					cordinate: ${weather.coord.lon} ${weather.coord.lat},
					temperature: ${weather.main.temp},
					pressure: ${weather.main.pressure},
					weather condition: ${weather.weather[0].main},
					wind speed: ${weather.wind.speed} km/h ;
				} `
				res.render("index", {weather: message, error:null});
			};
			
		};
	});
})

app.listen(3000, function(){
	console.log("The Server has started on port 3000!!");
})