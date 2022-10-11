// functions
// let person1 = "Vikrant";
// console.log(`Hello ${person1}`);
// let person2 = "Partha";
// console.log(`Hello ${person2}`);

// function creation
// function printFunction(person) {
// declared and define function
//   console.log(`Hello ${person}`);
// }

// console.log("i am calling a function");
// printFunction(); // calling or invoking

// printFunction("Partha"); // calling or invoking
// printFunction("NV");
// printFunction("Vikrant"); // values are arguments

// function
// 1. A way to store common functionality.
// 2. function is a block of code to perform a specific task.

// function sum(a, b, c) {
//   console.log(a + b + c);
// }
// sum(5, 6, 2);
// sum(2, 3, 5);
// sum(4, 5, 8);

// function sum(a, b) {
//   console.log(a + b);
//   return a + b;
// }
// let c = sum(5, 6) * 2;
// console.log(c);

// function sum(a, b) {
//   console.log(a + b);
// }

// function multiply(a, b) {
//   return a * b;
// }

// let c = multiply(sum(5, 6), 2);

// let func = function (a, b) {
//   return a + b;
// };

// let copiedFunc = func;
// console.log(func(5, 6));

/////////////////////////////////////////////////
/*
// functions.

const func = function(a, b) { // name of the variable 
    //would be the name of the function.
    return a+b;
} // anonymous function
func = function(a, b) { // name of the variable
    return a-b;
}


//function creation
// person - parameter
// function printFunction(person) { // declared and defination
//     console.log(`Hello ${person}`)
// }

// console.log('i am calling function')

// printFunction('Partha'); //calling or invoking
// printFunction('NV');
// printFunction('Vikrant'); //values are arguments


// function - 
// 1. A way to store common functionality.
// 2. function is a block of code that performs specific tasks.




// 1. function declaration and defination.
// 2. calling or invoking of a function.
// 3. arguments and parameters.
// 4. 

// let c = sum(5,6)
// console.log(c)

// let a = 2
// first-class-citizen - Number, string, boolean, objects, null, 
// undefined, bingInt, symbol, functions


// Hoisting will only work incase of normal functions, anonymous 
// functio

*/

/////////////////////////////////////////////
// Call stack

// function sum(a, b) {
//   print(a, b); // if this wouldn't exit
//   return a + b;
// }

// function print(...value) {
//   console.log(value);
// }

// print(sum(5, 6));

// call stack - function 1 calling function 2, first function 1 will be pushed on to stack , the function 2, first function2
// should be completely executed then ony function 1 can move forward.

// perfect square
/*
let n = 37;
let isPerfect = false;

for (let i = 1; i < 10; i++) {
  if (i * i === n) {
    isPerfect = true;
    break;
  }
}

if (isPerfect) {
  console.log("perfect square");
} else {
  console.log("not a perfect square");
}
*/

// function printFunction(person) {
//   //   console.log("hello" + person);
//   console.log(`hello ${person}`);
// }

// console.log("I am calling function");

// printFunction(" Partha");
// printFunction(" NV");
// printFunction(" Vikrant");

// function sum(a, b) {
//   console.log(a + b);
// }
// sum(5, 6);
// sum(2, 3);
// sum(4, 5);

// sum(5, 6);
// console.log(c);
// function sum(a, b) {
//   console.log(a + b);
//   return a + b;
// }

// function multiply(a, b) {
//   console.log(a * b);
//   return a * b;
// }

// let c = multiply(sum(5, 6), 2);
// let c = multiply(sum(undefined, 2);
// let c = sum(5, 6) * 2;
// console.log(c);

// let func = function (a, b) {
//   return a + b;
// anonymous function
// };

// let copiedFunc = func;
// console.log(copiedFunc(5, 6));

// function sum(a, b) {
//   print(a, b); // if this wouldn't exist
//   return a + b;
// }

// function print(...value) {
//   console.log(value);
// }

// print(sum(5, 6));
