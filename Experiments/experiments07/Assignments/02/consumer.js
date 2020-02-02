// Consumer 코드는 변경할 필요 없음
var Producer = require('./producer');  
var producer = new Producer();

producer.on('add', function(t) {  
	  console.log('add:', t);
});

producer.start();
