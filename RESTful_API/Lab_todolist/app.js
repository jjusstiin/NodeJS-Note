const express = require('express');
const app = express();
app.listen(3000);
app.use( express.static('public'));
app.use( express.static('node_modules') );
app.use( express.urlencoded({extended: true}));

const mysql = require('mysql');
const connection = mysql.createConnection({
	host : '127.0.0.1',
	user : 'root',
	password : 'root',
	database : 'tododb'
});
connection.connect(function(error) {
    if (error) {
        console.log('資料庫連線失敗');
        return;
    }
    console.log('資料庫連線成功');
});

app.get('/todo/list',function(req,res){
    connection.query("select * from todotable" ,'',
    function(err, rows) {
        if (err){
            console.log(JSON.stringify(err));
            return;
        }
        res.send(JSON.stringify(rows));
    }
    )
})

app.get('/todo/item/:id',function(req,res){
    connection.query("select * from todotable where todoTableId = ?" ,[req.params.id],
    function(err, rows) {
        if (err){
            console.log(JSON.stringify(err));
            return;
        }
        res.send(JSON.stringify(rows[0]));
    }
    )
})

app.put('/todo/item',function(req,res){
    connection.query("update todoTable set title = ?, isComplete = ? where todoTableId = ?  " ,
    [req.body.title, req.body.isComplete, req.body.todoTableId],
    function(err,row){res.send('ok')}
    )
})

app.delete('/todo/delete',function(req,res){
    connection.query("delete from todoTable where todoTableId = ? " ,
    [req.body.todoTableId],function(err,rows){
        res.send('delete ok');
    })
})