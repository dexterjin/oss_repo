var inherits = require('util').inherits;  
// inherits를 활용하여 Producer construct가 EventEmitter Construct를 상속받도록 해야 함
var EventEmitter = require('events').EventEmitter;


var Producer = function () {  
	  if (! (this instanceof Producer)) return new Producer();

	  EventEmitter.call(this);
}

// producer의 start 함수를 재정의 해야 함


module.exports = Producer;
