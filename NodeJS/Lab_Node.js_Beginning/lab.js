var express = require("express");
var app = express();

let page = express.Router();


// app.use(express.static("./public"))
app.get('/',function(req,res){
    res.send('This is home page.');
});

app.get('/about',function(req,res){
    res.send('This is about page.');
});

app.get('/info',function(req,res){
    res.send('This is info page.');
});

app.get('/',page);

app.listen(80, function(){
    console.log("ok");
});