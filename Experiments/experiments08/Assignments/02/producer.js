var inherits = require('util').inherits;  
var EventEmitter = require('events').EventEmitter;


var Producer = function () {  
	  if (! (this instanceof Producer)) return new Producer();

	  EventEmitter.call(this);
}

// inherits를 활용하여 Producer construct가 EventEmitter Construct를 상속받도록 해야 함
inherits(Producer, EventEmitter);

// producer의 start 함수를 재정의 해야 함
Producer.prototype.start = function () {

	// Random 스트링을 생성하여 이것을 Event에 실어서 보내야 하는 코드 작성 


}


module.exports = Producer;
