// Metadata Microservice

var express = require('express');
var app = express();
var path = require('path');
var multer  = require('multer');
var upload = multer({ dest: __dirname + '/public/uploads/'});
var bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.post('/file-upload', upload.single('file'), function (req, res, next) {
  console.log('Uploaded file:\n' + JSON.stringify(req.file));
  var name = req.file.originalname;
  var type = req.file.mimetype;
  var uploadid = req.file.filename;
  var size = req.file.size;
  var analysis = {"file": name,"size": size,"type": type,"uploadid": uploadid};
  console.log("Out to user:\n" + JSON.stringify(analysis));
  res.send(analysis);
});

app.listen(process.env.PORT, function () {
  console.log('app listening on port ' + process.env.PORT );
});