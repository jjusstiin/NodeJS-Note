const { json } = require('body-parser');
let express = require('express');
let app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

// Web 伺服器的靜態檔案置於 public 資料夾
app.use( express.static('/UI_Design'))
app.use( express.static( "node_modules" ) );

// 指定 esj 為 Express 的畫面處理引擎
app.set('view engine', 'ejs');
// app.engine('html', require('ejs').renderFile);//?
// app.set('views', __dirname + '/view');//?

//連接資料庫
let mysql = require('mysql');
let connection = mysql.createConnection({
    host : '127.0.0.1',
	user : 'root',
	password : 'root',
	database : 'tododb',
    port: 3306
})

connection.connect(function(error) {
    if (error) {
        console.log('資料庫連線失敗');
        return;
    }
    console.log('資料庫連線成功');
});

app.get('/todo/list',function(req,res){
    connection.query("SELECT * FROM `todotable`", [], function(err,row){
        res.render('index', {
            todoList: row
        });
    })
})

app.get('/todo/edit/:id',function(req,res){
    // res.send('OK:' + req.params.id);
    connection.query('SELECT * FROM todoTable where todoTableId = ?',[req.params.id],
    function(err,rows){
        // res.send(JSON.stringify(rows));
        res.render('Edit',{
            item : rows[0]
        })
    })
})

app.post('/todo/edit',function(req,res){
    let finish = req.body.isComplete ? true : false;
    connection.query('update todotable set title = ?, isComplete = ? where todoTableId = ?',
    [req.body.title, finish, req.body.todoTableId],
    function(err,rows){
        // res.send(req.body)
        res.redirect('/todo/list');
    })
    
})

//錯誤網址
app.use(function(req,res){
    res.send('此地無銀三百兩')
})

app.listen(3000,function(){
    console.log('sucess');
    console.log('http://localhost:3000/todo/list');
});