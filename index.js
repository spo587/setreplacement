var express = require('express');
var app = express();

var server = require('http').createServer(app);

function appGet(urlPath, fileExtension){
    app.get(urlPath, function(req, res){
        // res.header("Access-Control-Allow-Origin", "*");
        // res.header("Access-Control-Allow-Headers", "X-Requested-With");
        // res.header("Access-Control-Allow-Headers", "Content-Type");
        // res.header("Access-Control-Allow-Methods", "PUT, GET, POST, DELETE, OPTIONS");
        res.sendFile(__dirname + fileExtension);
    });
}

appGet('/','/index.html');

var port = process.env.PORT || 8080;

server.listen(port, function() {
    console.log('Our app is running on http://localhost:' + port);
});