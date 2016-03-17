var express = require("express"),
	http = require("http"),
	app;
	
	//create express-powered http server
	//have it listen to port 3000
	app = express();
	http.createServer(app).listen(3000);
	
	// set up our routes
	app.get("/hello", function (req, res) {
		res.send("Hello World!");
	});
	app.get("/goodbye", function (req, res) {
		res.send ("Goodbye World!");
	});