let express = require('express');
//導入express 虛擬伺服器模組
let userRouter = express.Router();
//啟動伺服器路由

userRouter.get('/',function(req, res){
    res.send('userRouter home page');
})
userRouter.get('/login',function(req, res){
    res.send('user login');
})
userRouter.get('/create',function(req, res){
    res.send('create user');
})
//get 網址 並 res 結果回去

module.exports = userRouter;
//匯出路由