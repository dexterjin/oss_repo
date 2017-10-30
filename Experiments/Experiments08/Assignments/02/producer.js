var inherits = require('util').inherits;  
var EventEmitter = require('events').EventEmitter;


var Producer = function () {  
	  if (! (this instanceof Producer)) return new Producer();

	  EventEmitter.call(this);
}

module.exports = Producer;
