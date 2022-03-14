let express = require('express');
//導入express 虛擬伺服器模組
let app = express();
//啟動伺服器

app.use(express.static('./hello')); 
//使用靜態資料，放資料結路徑

app.listen(3000,function(){
    console.log('ok');
})
//監聽 port 3000

app.get('/',function(req,res){
    res.send('This is home page!');
})
//get 網址 並 res 結果回去

let userRouter = require('./user.js');
let imgRouter = require('./img.js');
//導入 其他檔案

app.use('/users', userRouter);
app.use('/img', imgRouter);
//使用導入的檔案 定義網址

app.use(function(req,res){
    res.send('My custon 404 page');
})
//使用未被定義的檔案，回傳404