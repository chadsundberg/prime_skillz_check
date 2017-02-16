// 1 - Write a function declaration
// that takes no arguments and
// returns the value 4

function returnFour(){
  var number = 4;
  return console.log(number);
};
returnFour();

// 2 - Write a function declaration
// that takes two arguments and
// returns the value of the result
// of the multiplication of both
// arguments
function returnMult (x, y) {
  var result = x * y;
  return console.log(result);
}
returnMult(2, 3);
// 3 - Write a function expression
// that takes one argument and
// console logs that value.
var valueResult = function findValue (a){
  return a;
};

console.log(valueResult(1));
