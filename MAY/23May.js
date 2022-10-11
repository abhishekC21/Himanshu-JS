// Let's make a coffee
// function utensil() {
//   return "Utensil served, ";
// }

// function addMilk(coffee) {
//   return coffee + "Milk added, ";
// }

// function addCoffeePowder(coffee) {
//   return coffee + "coffee powder added, ";
// }

// function addSugar(coffee) {
//   return coffee + "sugar added";
// }

// let coffee = addSugar(addCoffeePowder(addMilk(utensil())));
// console.log(coffee);

// closure

function add2() {
  let a = 2;
  return function (x, y) {
    return x * y + a;
  };
}
let nested = add2();
console.log(nested(5, 3));

// Currying

// function input1(a) {
//   return function (b) {
//     return function (c) {
//       return a + b + c;
//     };
//   };
// }

// let oneThird = input1(2)(3)(5);
// console.log(oneThird);

// let sum = (a) => (b) => (c) => a + b + c;

// let oneThird = sum(2)(3)(5);
// console.log(oneThird);

//////////////////////////////////////////////////////////

// IIFE (Immediately Invoked Function Expression)

// (function sum(a, b) {
//   console.log(a + b);
// })(5, 6);

// let output = (
//   (a) => (b) =>
//     a + b
// )(5)(6);
// console.log(output);

// const readline = require("readline");

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout,
// });

// rl.question("What is your name? ", function (answer) {
//   console.log(`oh, so your name is ${answer}`);
//   console.log("Closing the interface");
//   rl.close();
// });

// rl.question("Enter number space seperated. ", function (input) {
//   let arr = input.split(" ");
//   console.log(+arr[0] + +arr[1]);
//   rl.close();
// });

// function print(func, input) {
//   func(input);
// }
// print(console.log, 5);
