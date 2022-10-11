// var x = 22;
// var result;
// if (x % 2 === 0) {
//   console.log("Divisible by 2");
//   result = "Divisible by 2";
// } else {
//   console.log("not divisible by 2");
//   result = "not divisible by 2";
// }
// console.log(result);

////////////////////////////////////
// Ternary operator
// var x = 22;
// var result;
// var result = x % 2 === 0 ? "divisible by 2" : "not divisible by 2";
// console.log(result);

// var a = 11;
// var b = 15;
// var c = b > a ? (a > b ? 20 : -1) : 15;

// if (b > a) {
//   if (a > b) {
//     d = 20;
//   } else {
//     d = -1;
//   }
//   c = d;
// } else {
//   c = 15;
// }
// console.log(c);

//////////////////////////////////////////////////////
// Iterative Statements or While loop

// var n = 5;
// var sum = 0;
// var i = 1; // initialization
// while (i <= n) {
// condition
//   sum += i; // sum = sum + i
//   i++; // increment or decrement
// }
// console.log(sum);
// while the condition is true statements inside it will execute.

/////////////////////////////////////////////
// for loop
// var n = 5;
// var sum = 0;
// for (let i = 1; i <= n; i++) {
//   sum += i;
// }
// console.log(sum);

// let sum = 0;
// for (let i = 0, j = 0; i < 5 && j < 5; ++i, j = i + 2) {
//   sum += i;
// }
// console.log(sum);

/////////////////
// break : it's terminating a whole loop
// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     break;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i === 5) {
//     continue;
//   }
//   console.log(i);
// }

// for (let i = 1; i <= 2; i++) {
//   for (let j = 1; j <= 2; j++) {
//     if (i == j) {
//       continue;
//     }
//     console.log(i, j);
//   }
// }

////////////////////////////////
// Type coercion
// console.log(null + "Hello");
// console.log(undefined + "Hello");
// console.log(undefined + NaN);
// console.log("2" - 2);
// console.log("2" + 2);
// console.log(true + 20);
// true = 1;
// false = 0;

////////////////////////////////////////////
// Practice Question

// 1.Program to check if a number is a perfect square
let n = 64;
for (let i = 1; i <= n; i++) {
  if (i * i === n) {
    console.log("perfect square");
  } else {
    console.log("not a perfect square");
    break;
  }
}

// 2. Program to check if a number is odd or even
// var n = 22;
// if (n % 2 === 0) {
//   console.log("even");
// } else {
//   console.log("odd");
// }

// function isPerfectSquare(n) {
//   var x = Math.floor(Math.sqrt(n));

//   if (x * x == n) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(isPerfectSquare(101));

// console.log(isPerfectSquare(100));
