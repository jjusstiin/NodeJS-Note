let express = require('express');
let app = express();

app.listen(3000);

// app.set("view engine", "ejs"); 此行可不寫 但要安裝ejs套件

app.get('/', function(req, res){
    // res.send('ok');
    res.render('index.ejs');
})

app.get('/test', function(req, res){
    // res.send('ok');
    // res.locals.useName = 'justin'
    res.render('test.ejs', {"useName":"Justin"});
})