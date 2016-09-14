// Metadata Microservice

var express = require('express');
var app = express();
var path = require('path');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/', upload.single(), function (req, res, next) {
  console.log(req.file); 
  console.log(req.body);
});
 

app.listen(process.env.PORT, function () {
  console.log('app listening on port ' + process.env.PORT );
});