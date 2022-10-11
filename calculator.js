// var x = prompt("Enter a number");
// console.log(x);

var first = prompt("Enter first number");
var second = prompt("Enter second number");
var operator = prompt("enter one of +, -, /, * operator");
var result = 0;

var c = +first;
if (!c) {
  alert("Hey u have given the wrong input");
  exit;
} else {
  switch (operator) {
    case "+": {
      result = +first + +second;
      break;
    }
    case "-": {
      result = first - second;
      break;
    }
  }
  alert(result);
}
