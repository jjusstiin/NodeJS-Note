const express = require('express');
const es = require('express-session');
const app = express();
app.listen(3000);

//連接資料庫
let mysql = require('mysql');
let connection = mysql.createConnection({
    host : '127.0.0.1',
	user : 'root',
	password : 'root',
	database : 'testdb',
    port: 3306
})

app.set('view engine','ejs')
app.use(express.static('public'));
app.use(express.static('node_modules'));
app.use(express.urlencoded({ extended:true }));
app.use(es({
    secret : "password",
    resave: true,
    saveUninitialized: true
}));


app.get('/',function(req,res){
    res.redirect('/home/index');
})

app.get('/home/index',function(req,res){
    let userId = req.session.userName || "Guest"
    res.render('index',{userName: userId});
})

app.get('/member/logout',function(req,res){
    req.session.userName = "Guest"
    res.render('login',{});
})

app.get('/member/login',function(req,res){
    res.render('login',{});
})

app.post('/member/login',function(req,res){
    req.session.userName = req.body.txtID;
    connection.query("SELECT img FROM `table_name` WHERE id = ?", [4], function(err,row){
        req.session.imgg = row[0].img
        res.redirect('/home/index');
    })
})

app.get('/member/secret',function(req,res){
    let userId = req.session.userName || "Guest";
    let imgg = req.session.imgg;
    console.log(imgg);
    if(userId == 'Guest'){
        res.redirect('/home/index')
    }else{
        res.render('member',{userName:userId, imgg:imgg});
    }
   
})