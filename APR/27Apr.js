/*
// program to find the HCF of two integers

let hcf;
// take input
let number1 = 4;
let number2 = 16;

//min=number1<number2?num1?num2;
// looping from 1 to number1 and number2
for (let i = 1; i <= number1 && i <= number2; i++) {
  // check if is factor of both integers
  if (number1 % i == 0 && number2 % i == 0) {
    hcf = i;
  }
}

// display the hcf
console.log(`HCF of ${number1} and ${number2} is ${hcf}.`);

//reverse a string

function reversingString(string_value) {
  // empty string
  le
  */

// let n  =25;
// function convertoBits(n) {
//   let result = "";
//   while (n) {
//     let rem = n % 2;
//     result = rem + result;
//     n = parseInt(n / 2);
//   }
//   return result;
// }

// function isEven(n = 5) {
//   if (n & 1) {
//     return false;
//   }
//   return true;
// }

// let n = 25;
// let result = "";
// while (n != 0) {
//   let rem = n % 2;
//   // result += rem;
//   result = rem + result;
//   n = parseInt(n / 2);
// }
// console.log(result.split("").reverse("").join(""));
// console.log(result);

// 25%2 = 1, result = 1
// 12%2 = 0, result = 10
// 6%2 = 0,  result = 100
// 3%2 = 1, result = 1001
// 1%2 = 1, result = 10011
// 0

// 11001

// function convertoBits(n) {
//   let result = "";
//   while (n != 0) {
//     let rem = n % 2;
//     // result += rem;
//     result = rem + result;
//     n = parseInt(n / 2);
//   }
//   return result;
// }
// console.log(5 & 11);

// function isEven(n = 5) {
//   if (n & 1) {
//     return false;
//   }
//   return true;
// }

function hcf(a, b) {
  let hcf;
  for (let i = 1; i <= a && i <= b; i++) {
    if (a % i === 0 && b % i === 0) {
      hcf = i;
    }
  }
  return hcf;
}

function lcm(a, b) {
  return (a * b) / hcf(a, b);
}

console.log(lcm(24, 16));
