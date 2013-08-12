var express = require('express');
var app = express();
var fs = require("fs");
app.use(express.logger());

app.get('/', function(request, response) {
  var text_buffer = new Buffer(fs.readFileSync("index.html"));
  var text = text_buffer.toString();
  response.send(text);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
