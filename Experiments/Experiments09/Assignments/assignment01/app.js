var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var books = new Array();

app.get('/book/:bookId', function (req, res) {
	// Get book information
	
});

app.put('/book/:bookId', function (req, res) {
	// Update book information

})
app.post('/book', function (req, res) {
	// Create book information
})

app.delete('/book/:bookId', function (req, res) {
	// Delete book information
	
})
var server = app.listen(23023);
	console.log(books);
