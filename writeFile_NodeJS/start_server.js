//瀏覽器閱讀方式 text/plain (純文字), text/html(html檔案)
//terminal ctrl + c 終止伺服器

var http = require("http");
var fs = require("fs");
console.log("Starting...");
var host = "127.0.0.1";
var port = 80; //瀏覽器預設80 避免與阿帕契打架 js設定3000
var server = http.createServer( function (request, response) {
	console.log("Got a request: " + request.url);
	fs.readFile("." + request.url, function (error, data) {
		if (error) {
			response.writeHead(404, {"Content-type": "text/plain"});
			response.end("File not found.");
		} else {
			response.writeHead(200, {"Content-type": "text/html"});
			response.end(data);//網頁顯示
		}
	});
});

server.listen(port, host, function () {
	console.log("Listening...");
});