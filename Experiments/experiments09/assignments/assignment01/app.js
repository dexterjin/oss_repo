var express = require('express');
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var books = new Array();

app.get('/book/:bookId', function (req, res) {
	var bookId = req.params.bookId;
    console.log(books[bookId]);
    res.send(books[bookId]);
});

app.post('/book', function (req, res) {
	// Create book information
	books[req.body.id] = [req.body.id, req.body.name, req.body.price, req.body.author];
	
})

app.put('/book/:bookId', function (req, res) {
	// Update book information

})


app.delete('/book/:bookId', function (req, res) {
	// Delete book information
	
})
var server = app.listen(80);
	console.log(books);
