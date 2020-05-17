var express = require('express');
const bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());

app.post('/hook', function (request, response) {

    var eventObj = request.body.events[0];
    var source = eventObj.source;
    var message = eventObj.message;

    // request log
    console.log('======================', new Date() ,'======================');
    console.log('[request]', request.body);
    console.log('[request source] ', eventObj.source);
    console.log('[request message]', eventObj.message);

    response.sendStatus(200);
});

var server = app.listen(23023, function () {
        var host = server.address().address
        var port = server.address().port
        console.log("Example app listening at http://%s:%s", host, port)
})
