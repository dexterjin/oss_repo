var Producer = require('./producer');  
var producer = new Producer();

producer.on('add', function(t) {  
	  console.log('add:', t);
});

producer.start();
