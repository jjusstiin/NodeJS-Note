let http = require('http');
let server = http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'});
    res.write(`<!DOCTYPE html>
    <html>
    <head>

    <meta charset="UTF-8">
    <title>CSS Menu</title>
    
    <style type="text/css">
    </style>
    </head>
    <body>
        
        <h1>Navigation Menu</h1>
        <ul id="navmenu">
            <li><a href="#">hyperlink 1</a></li>
            <li class="hov"><a href="#">hyperlink 2<span class="darrow">&#9660;</span></a>
                <ul class="sub1">
                    <li><a href="#">hyperlink 2.1</a></li>
                    <li><a href="#">hyperlink 2.2</a></li>
                    <li><a href="#">hyperlink 2.3</a></li>
                </ul></li>
            <li><a href="#">hyperlink 3</a></li>
            <li class="hov"><a href="#">hyperlink 4<span class="darrow">&#9660;</span></a>
                <ul class="sub1">
                    <li><a href="#">hyperlink 4.1</a></li>
                    <li><a href="#">hyperlink 4.2</a></li>
                    <li class="hov2"><a href="#">hyperlink 4.3<span class="rarrow">&#9654;</span></a>
                        <ul class="sub2">
                            <li><a href="#">hyperlink 4.3.1</a></li>
                            <li><a href="#">hyperlink 4.3.2</a></li>
                            <li><a href="#">hyperlink 4.3.3</a></li>
                        </ul></li>
                </ul></li>
            <li><a href="#">hyperlink 5</a></li>
        </ul>
        <style>
        * {
        margin: 0px;
        padding: 0px;
        }
    
        ul{
            list-style-type: none;
        }
    
        body {
        font-family: verdana;
        background-color: #ABC;
        padding: 50px;
        }
            
        h1 {
            text-align: center;
            border-bottom: 2px solid #009;
            margin-bottom: 50px;
            }
    
        #navmenu li{
            float: left;
            position: relative;
            margin: 2px;
        }
        #navmenu a{
            display: inline-block;
            line-height: 30px;
            width: 125px;
            height: 30px;
            background: brown;
            border-radius: 5px;
            text-align: center;
        }
        
        #navmenu a,#navmenu span{
            color: wheat;
            text-decoration: none;
            font-size: 10px;
        }
        .sub1 , .sub2{
            display: none;
        }
    
        
        #navmenu li:hover > a{
            background: rgb(59, 39, 16);
        }
    
        #navmenu li a:hover{
            background: gray;
        }
    
    
        .hov:hover .sub1 {
            display: block;
            position: absolute;
        }
    
        .hov2:hover .sub2{
            display: block;
            position: absolute;
            left: 125px;
            top: 0px;
        }
        .hov2:hover .sub2{
            display: block;
            position: absolute;
            left: 125px;
            top: 0px;
        }
        </style>
    
    </body>
    </html>`);
    res.end('Hello World');
});
server.listen(3000);
console.log('ok');