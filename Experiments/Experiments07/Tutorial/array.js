
var alpha = ["a", "b", "c"];
var numeric = [1, 2, 3];
var alphaNumeric = alpha.concat(numeric);
console.log("alphaNumeric : " + alphaNumeric );


var numbers = [1, 4, 9];
var element = numbers.pop();
console.log("element is : " + element );

var numbers = new Array(1, 4, 9);
var length = numbers.push(10);
console.log("new numbers is : " + numbers );

var arr = [0, 1, 2, 3].reverse();
console.log("Reversed array is : " + arr );

console.log("Reversed Again : " + arr.reverse());


var element = [105, 1, 2, 3].shift();
console.log ("Removed element is : " + element );


var arr = new Array("orange", "mango", "banana", "sugar");
var length = arr.unshift("water");
console.log("Returned array is : " + arr );
console.log("Length of the array is : " + length );

