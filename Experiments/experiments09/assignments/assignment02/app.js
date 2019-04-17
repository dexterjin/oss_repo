var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var session = require('express-session')

app.use(session({ secret: 'keyboard cat', cookie: { maxAge: 60000 }}))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


var users = new Array();
var userId = 'test';
var userPass = '1234';

app.get('/login/:userId/password/:password', function (req, res) {
	if (req.params.userId == userId && req.params.password == userPass) {
		req.session.userId =  userId;
	}
	res.send("Login");
});

app.get('/logout/:userId', function (req, res) {
	// Logout
	req.session.userId = null;
	res.send("LogOut");
	
});

var auth = function (req, res, next) {
	// Session Check
	if (req.session.userId != null) 
		next();
	else
		res.send("Error");
		
};
app.get('/user/:userId', auth,function (req, res) {
	// get User Information
	res.send("OK");
});	
var server = app.listen(80);
