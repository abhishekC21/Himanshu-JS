// let n = 10;
// let x = 3;
// if (n % 2 === 0) {
//   console.log("Number is even");
// } else {
//   console.log("Number is odd");
// }

// if (x % 2 === 0) {
//   console.log("Number is even");
// } else {
//   console.log("Number is odd");
// }

// n % 2 === 0 ? "Number is even" : "Number is odd";
// x % 2 === 0 ? "Number is even" : "Number is odd";

// const x = 2,
//   y = 9;
// if (x > y) {
//   console.log(`${x} is greater than ${y}`);
// } else {
//   console.log(`${y} is greater than ${x}`);
// }

// Ternary operator
// x > y
//   ? console.log(`${x} is greater than ${y}`)
//   : console.log(`${y} is greater than ${x}`);

/////////////////////////////////////
// Find the largest among three numbers
// let GreaterValue = (x, y, z) => {
//   let maxValue;
//   if (x > y && x > z) {
//     maxValue = x;
//   } else if (y > x && y > z) {
//     maxValue = y;
//   } else {
//     maxValue = z;
//   }
//   return maxValue;
// };
// const x = 22,
//   y = 29,
//   z = 17;
// let maxValue = GreaterValue(x, y, z);
// console.log(`${maxValue} is the maximum value out of ${x}, ${y} and ${z}`);

//////////////////////////////////////////
// let isEven = (num) => {
//   if (num % 2 === 0) {
//     console.log(`${num} is even number`);
//   } else {
//     console.log(`${num} is even number`);
//   }
// };
// isEven(3);
// isEven(6);

//////////////////////////////////////////////
// 2. Check is a given number A is even or odd without using comparison operator i.e. < > ==
// let isEven = (num) => {
//   if (!(num & 1)) {
//     console.log(`${num} is even number`);
//   } else {
//     console.log(`${num} is odd number`);
//   }
// };
// isEven(3);
// isEven(6);

///////////////////////////
// let isEven = (num) => {
//   if (num & 1) {
//     console.log(`${num} is odd number`);
//   } else {
//     console.log(`${num} is even number`);
//   }
// };
// isEven(8);
// isEven(7);

//////////////////////////////
// let evenOdd = function (num) {
//   if (num % 2 === 0) {
//     console.log(`${num} is even number`);
//   } else {
//     console.log(`${num} is odd number`);
//   }
// };
// evenOdd(9);
// evenOdd(4);

//////////////////////////////////////////////////////////////////////////
// 3. Write a program to find out the sum of the max and the minimum element of the array A
/*
let sumofMinMax = (arr, n) => {
  let minVal = Number.MAX_VALUE;
  let maxVal = Number.MIN_VALUE;

  for (i = 0; i < n; i++) {
    if (minVal > arr[i]) {
      minVal = arr[i];
    }
    if (maxVal < arr[i]) {
      maxVal = arr[i];
    }
  }

  return minVal + maxVal;
};

const arr = [5, 1, 2, 9];
console.log(`sum of min max of given array is ${sumofMinMax(arr, arr.length)}`);
*/

/////////////////////////////////////////////////////
// 4. In a given array A of N elements, find the maximum and minimum sum of N-1 elements
/*
let sumofMinMax = (arr, n) => {
  let sum = 0;
  for (let i = 0; i < n; i++) {
    sum += arr[i];
  }

  let minVal = Number.MAX_VALUE;
  let maxVal = Number.MIN_VALUE;

  for (i = 0; i < n; i++) {
    if (minVal > arr[i]) {
      minVal = arr[i];
    }
    if (maxVal < arr[i]) {
      maxVal = arr[i];
    }
  }

  return `Max sum of (n-1) values will be ${
    sum - minVal
  } and min sum of (n-1) values will be ${sum - maxVal}`;
};

const arr = [5, 1, 2, 9];
console.log(sumofMinMax(arr, arr.length));
*/

// let marks = 50;
// marks > 40
//   ? console.log("You pass the exam")
//   : console.log("You failed the exam");

// let x = 2;
// switch (true) {
//   case x === 0:
//     text = "The number is zero";
//     break;

//   case x > 0:
//     text = "The number is positive";
//     break;

//   case x < 0:
//     text = "The number is negative";
//     break;
//   default:
//     text = "No value found";
// }
// console.log(text);

///////////////////////////////////////////////
// Write a program to find the HCF or GCD of two integers
// let hcf_value;
// const first_number = 16;
// const second_number = 8;

// for (let i = 1; i <= first_number && i <= second_number; i++) {
//   if (first_number % i === 0 && second_number % i === 0) {
//     hcf_value = i;
//   }
// }
// console.log(
//   `HCF value of ${first_number} and ${second_number} is ${hcf_value}.`
// );

/////////////////////////////////////
// Create a pattern using ‘*’ as shown below using loops.
// *
// **
// ***
// ****
// *****

// let number_of_rows = 5;
// let star_string = "";
// for (let row = 0; row < number_of_rows; row++) {
//   for (let column = 0; column <= row; column++) {
//     star_string += "*";
//   }
//   star_string += "\n";
// }
// console.log("", star_string);

/////////////////////////////////////
// Write power function for any positive integer
// Hint : Power function F(x^n) = x*x*x…n times; where x is the base and n is the exponent

// function power(base, exponent) {
//   var result = 1;
//   if (exponent === undefined) {
//     exponent = 2;
//   }
//   for (var i = 1; i <= exponent; i++) {
//     result = result * base;
//   }
//   return result;
// }

// console.log(power(2, 4));

//////////////////////////////////////////////
// Print all the prime number up to a given number value.

// var number_count = 20;
// for (var prime_iterator = 2; prime_iterator <= number_count; prime_iterator++) {
//   var isPrime = true;
//   for (var divident = 2; divident <= Math.sqrt(prime_iterator); divident++) {
//     if (prime_iterator % divident === 0) {
//       isPrime = false;
//       break;
//     }
//   }
//   if (isPrime) {
//     console.log(prime_iterator + "");
//   }
// }
// console.log("\n");
