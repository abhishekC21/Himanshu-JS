// Call stack

// function a() {
// b();
//   console.log("a");
// }
//
// function b() {
// c();
//   console.log("b");
// }
//
// function c() {
//   console.log("c");
// }

// a(); // calling of a
// b(); // calling of a
// // c(); // calling of a

// call stack ---> function calling function

// call stack
// a();
// function expression --> storing it in a
// annonymous function
// let b = function () {
//   console.log("b");
// };
// b();

// function declaration
// hoisting will not happen
// function a() {
//   console.log("a");
// }
// b = a;
// a();

// let a = 2;
// console.log(a);
// let b = 3;
// console.log(b);
// a = b;
// console.log(a);

// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(2, 3));

// console.log(a);
// var a = 2;
// console.log(a);

////////////////////////////////////////////
// scope

// 1. block scope
// let a = 2;

// if (a >= 2) {
//   let a = 3;
//   console.log(a);
//   if (a >= 3) {
// console.log(a);
// }
// console.log(a);

//   console.log("in the block scope");
// }
// block scope --> if, else, for, while, switch

///////////////////////////////////////////
// return statement
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(2, 3));

// console.log(a);
// var a = 2;
// console.log(a);

// var a = 2;

// if (a >= 2) {
//   var a = 3;
//   console.log(a); // 3
//   if (a >= 3) {
//     console.log(a);
// }
// console.log(a); // 3

// block scope - if, else, for, while, switch, function --> whatever is
// there inside a block, that will remain inside, but block can access
// paraent scope i.e. global scope
// var - global  scope --> because of hoisting.

// var is global scope ---> beacaue of hoisting

// var num = 3;
// function a() {
//   var num = 6;
//   console.log(num);
// }
// a();
// console.log(num);

// var - global function scope --> you can define var variable with same name in diffreent functions and these will be treated
// differnet memory locations.

// let , const
// if/ else/
