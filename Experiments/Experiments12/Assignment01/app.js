const express = require('express');
const fileUpload = require('express-fileupload');
const app = express();
 
//var aws = require('aws-sdk');
//aws.config.loadFromPath('./awsconfig.json');

//var BUCKET_NAME = 'intothegalaxy';
//var s3 = new aws.S3();


function uploadFile(file, res) {

  // Use the mv() method to place the file somewhere on your server 
  file.mv('./upload/' + file.name, function(err) {
    if (err)
      return res.status(500).send(err);
 
    res.send('File uploaded!');
  });

	
}

// default options 
app.use(fileUpload());
 
app.post('/', function(req, res) {
	if (!req.files)
		return res.status(400).send('No files were uploaded.');
	uploadFile(req.files.file, res);
});

app.get('/:fileName', function(req, res){
	var file = __dirname + '/upload/' + req.params.fileName;
	res.download(file); // Set disposition and send it.
});

var server = app.listen(23023);

