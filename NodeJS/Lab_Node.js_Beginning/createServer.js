console.log("Starting...");
var fs = require("fs");
var host = "127.0.0.1";
var port = 80;
var express = require("express");
var app = express();

app.use(express.static("public/hello/"));//靜態資料抓取

app.get("/price/:min/:max", function (request, response) {
	response.send("price:" + request.params.min + "~" + request.params.max)
});

app.get("/hello/:who", function (request, response) {
	response.send("hello!" + request.params.who);
});

app.get("/", function (request, response) {
	response.send("hello!");
});

app.listen(port, host);