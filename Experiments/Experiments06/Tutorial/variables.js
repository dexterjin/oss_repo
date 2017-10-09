var name = "Ali";
var money;
money = 2000;

console.log("my name is " + name);
console.log("my money is " + money);

var myVar = "global"; // Declare a global variable
function checkscope( ) {
  var myVar = "local";
  // Declare a local variable
  console.log("print myVar " + myVar);
}

console.log("print myVar " + myVar);
checkscope();
