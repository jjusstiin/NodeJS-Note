// 以 Express 建立 Web 伺服器
var express = require("express");
var app = express();

// 以 body-parser 模組協助 Express 解析表單與JSON資料
var bodyParser = require('body-parser');
app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({extended: false}) ); //extended: false 只能閱讀字串

// Web 伺服器的靜態檔案置於 public 資料夾
app.use( express.static( "public" ) );
app.use( express.static( "node_modules" ) );

// 以 express-session 管理狀態資訊
var session = require('express-session');
app.use(session({
    secret: 'secretKey',
    resave: false,
    saveUninitialized: true
}));

// 指定 esj 為 Express 的畫面處理引擎
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);//?
app.set('views', __dirname + '/view');//?

//連接資料庫
let mysql = require('mysql');
let connection = mysql.createConnection({
	host : '127.0.0.1',
	user : 'root',
	password : 'root',
	database : 'labdb',
    port: 3306
});

connection.connect(function(error) {
    if (error) {
        console.log('資料庫連線失敗');
        return;
    }
    console.log('資料庫連線成功');
});

//取
app.get("/home/news", function (req, res) { // 可以用post不提供網址api
	connection.query('select * from news', '',
		function(err, rows) {
			if (err)	{
				console.log(JSON.stringify(err));
				return;
			}
			res.send(JSON.stringify(rows));
		}
	); 
})

//增
app.post("/home/news", function (request, response) {
	connection.query(
		"insert into news set title = ?, ymd = ? ", 
			[
				request.body.title, 
				request.body.ymd
			]);
	response.send("row inserted."); 
})

//修
app.put('/home/news',function(req,res){
    connection.query(
		"update news set title = ?, ymd = ? where newsId = " 
		    + req.body.newsId, 
			[
				req.body.title, 
				req.body.ymd
			]);
	res.send("row updated.");
})

//刪
app.delete("/home/news", function (request, response) {
	connection.query(
		"delete from news where newsId = " + request.body.newsId,
			[]
		);
	response.send("row deleted.");
})

// 一切就緒，開始接受用戶端連線
app.listen(3000);
console.log("Web伺服器就緒，開始接受用戶端連線.");
console.log("「Ctrl + C」可結束伺服器程式.");



