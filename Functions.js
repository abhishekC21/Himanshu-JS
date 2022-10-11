// let num1 = 1,
//   num2 = 2,
//   num3 = 3;

// let sumofValues = (n1, n2) => {
//   return n1 + n2;
// };

// let sumofValues = (n1, n2) => n1 + n2;
// let printValues = (n) => console.log(n);

// 1. sum of num1 and num2
// console.log(sumofValues(num1, num2));

// 2. sum of num2 and num3
// console.log(sumofValues(num2, num3));

// 3. sum of num1, num2, num3
// let sum1 = sumofValues(num1, num2);
// let finalSum = sumofValues(sum1, num3);

// printValues(num1);
// printValues(num2);
// printValues(num3);
// printValues(finalSum);

///////////////////////////////////////////////
// 1. Write a function to compute the cube root of the given number

// let cuberoot1 = (num) => Math.cbrt(num);
// let printValues = (num) => console.log(`Cube root is ${num}`);

// returns the absolute difference of n-mid*mid*mid
// let diff = (num, mid) => {
//   if (num > mid * mid * mid) {
//     return num - mid * mid * mid;
//   } else {
//     mid * mid * mid - num;
//   }
// };

// let cuberoot2 = (num) => {
//   let start = 0;
//   let end = num;

// set error or precision
// let e = 0.0000001;
// while (true) {
//   let mid = (start + end) / 2;
//   let error = diff(num, mid);

// if error is less than e then mid is the answer
//     if (error <= e) {
//       return mid;
//     }
//     if (mid * mid * mid > n) {
//       end = mid;
//     } else {
//       start = end;
//     }
//   }
// };
// let cubert1 = cuberoot1(8);
// let cubert2 = cuberoot1(1000);
// console.log("Using approch 1");
// printValues(cubert1);
// printValues(cubert2);
// console.log("Using approch 2");

// let cubert3 = cuberoot1(8);
// let cubert4 = cuberoot1(1000);
// printValues(cubert3);
// printValues(cubert4);

/////////////////////////////////////
// 2. Given x,n and d, write a function to compute the following pow(x^n )%d
/*
let power = (x, n, d) => {
  let res = 1;

  while (n > 0) {
    // check if n is odd or even

    if (n & 1) {
      // odd
      res *= x;
    }
    // n = n >> 1;
    n = n / 2;
    x = x * x;
  }
  return res % d;
};
console.log(`power is ${power(2, 3, 5)}`);
console.log(`power is ${power(2, 5, 13)}`);
*/

////////////////////////////////////////////////

// 1D array
/*
let median;
let arr = [3, 5, 4, 1, 8, 6, 9];
arr.sort((a, b) => a - b);
console.log(arr);

if (arr.length % 2 === 0) {
  let a = arr[parseInt(arr.length / 2) - 1];
  let b = arr[parseInt(arr.length / 2) - 1];
  median = (a + b) / 2;
} else {
  median = arr[parseInt(arr.length / 2)];
}
console.log(median);
*/

// 2D array
// 3. Given an a 2D array of size MxN, find the median of the matrix
/*
let median;
let temp = [];
let arr = [
  [2, 3, 1],
  [6, 9, 4],
  [11, 10, 7],
];
for (let i = 0; i < arr.length; i++) {
  for (let j = 0; j < arr.length; j++) {
    temp.push(arr[i][j]);
  }
}
temp.sort((a, b) => a - b);
console.log(temp);

if (temp.length % 2 === 0) {
  let a = temp[parseInt(temp.length / 2) - 1];
  let b = temp[parseInt(temp.length / 2) - 1];
  median = (a + b) / 2;
} else {
  median = temp[parseInt(temp.length / 2)];
}
console.log(median);
*/
