let express = require('express');
let imgRouter = express.Router();

imgRouter.get('/',function(req, res){
    res.send('img page');
})

imgRouter.get('/outdoor',function(req, res){
    res.send('outdoor pics');
})

imgRouter.get('/indoor',function(req, res){
    res.send('indoor pics');
})

module.exports = imgRouter;