var Producer = require('./producer');  
var producer = new Producer();

producer.on('add', function(t) {  
	  console.log('add:', t);
});

producer.start();

// stop the clock 10 seconds after
// setTimeout(function() {  
//   clock.stop();
//   }, 10e3)
