const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({ extended: true}));
app.set("view engine", "ejs");
app.use(express.static("public"));

app.get("/", function(req, res){
	res.render("index");
})

app.post("/", function(req, res){
	res.render("index");
	console.log(req.body.city);
})

app.listen(3000, function(){
	console.log("The Server has started on port 3000!!");
})