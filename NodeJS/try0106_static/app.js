let express = require('express');
let app = express();

// http://localhost:3000/images/1.jpg
app.use(express.static('./htdocs'))
//可以抓到這的路徑內的東西 網址上呈現此路徑以下的路徑
//範例中 GET where 條件誰在前面誰負責

app.listen(3000);

app.get('/where.html',function(req, res){
    res.send(__dirname);
})
