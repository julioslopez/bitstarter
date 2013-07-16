var express = require('express');
var fs= require('fs');
var app = express.createServer(express.logger());


app.get('/', function(request, response) {
  var resultado = fs.readFile('index.html','utf8');
  response.send("resultado");

});


var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
