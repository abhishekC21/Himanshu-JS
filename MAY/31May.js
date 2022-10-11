// JavaScript code to demonstrate star pattern

// let printStar = (n) => {
//   if (n === 0) return;
//   let star = "";
//   for (let i = 1; i <= n; i++) {
//     star += "* ";
//   }
//   printStar(n - 1);
//   console.log(star);
//   //   console.log(star);
// };
// printStar(5);

// let printStar = (n) => {
//   if (n === 0) {
//     return;
//   }
//   printStar(n - 1);
//   let star = appendStar(n);
//   console.log(star);
// };

// let appendStar = (n) => {
//   if (n === 0) return " ";
//   return "* " + appendStar(n - 1);
// };

// printStar(5);

///////////////////////////////////////////
// Factorial

// let factorial = (n) => {
//   if (n === 0) return 1;
//   return n * factorial(n - 1);
// };
// console.log(factorial(5));

////////////////////////////////////////
// Fibonacci;

// let fib = (n) => {
//   if (n === 0 || n === 1) return n;
//   return fib(n - 1) + fib(n - 2);
// };
// console.log(fib(6));

///////////
// Print increasing numbers using recursion

// let f = (n) => {
//   if (n === 1) {
//     console.log(1);
//     return n;
//   }
//   f(n - 1);
//   console.log(n);
// };
// f(5);

///////////
// Program to check if array is sorted

// let issorted = (arr, i) => {
//   if (i === arr.length - 1) return true;
//   let check = arr[i] <= arr[i + 1];
//   return check && issorted(arr, i + 1);
// };
// let arr = [1, 2, 4, 5, 3];
// console.log(issorted(arr, 0));

////////////////
// Friends Pairing Problem

// let friendPair = (n) => {
//   if (n === 0 || n === 1 || n === 2) return n;
//   return friendPair(n - 1) + (n - 1) * friendPair(n - 2);
// };
// console.log(friendPair(4));

////////////////
// Take an array of size 10. Calculate sum of all array elements using tail recursion.

// let sum = (arr, i) => {
//   if (i === arr.length - 1) return arr[i];
//   return sum(arr, i) = arr[i] + sum(arr, i+1)
// };
// let arr = [1,2,3,4,5,6,7]
// console.log(sum(arr, 6))

////////////////
// Write a function that takes a string and returns if string is a palindrome

// let isPalindrome = (str, i, j) => {
//   if (i >= j) return true;

//   return str[i] === str[j] && isPalindrome(str, ++i, --j);
// };
// let input = "madam";
// console.log(isPalindrome(input, 0, input.length - 1));

// let input = [1, 2, 3, 4];
// let sum = input.reduce((acc, curr) => acc + curr);
// console.log(sum);

// let input = [1, 2, 3, 4];
// let sum = (...rest) => rest.reduce((acc, curr) => acc + curr);
// console.log(sum(10, 20, 30));

// const additio = (...rest) => {
//   return rest.reduce((n, next) => n + next, 100);
// };

// console.log(additio(10, 20, 30));
