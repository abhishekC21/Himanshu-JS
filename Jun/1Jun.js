// Tiling Problem Recursively

// let tillingProblem = (n) => {
//   if (n === 0 || n === 1 || n === 2) return n;
//   return tillingProblem(n - 1) + tillingProblem(n - 2);
// };
// console.log(tillingProblem(4));

////////////////////////////////////////
// Count Maze Path

// let countMaze = (m, n) => {
//   if (n < 1 || m < 1) {
//     return 0;
//   }
//   if (n === 1 && m === 1) {
//     return 1;
//   }
//   return countMaze(m - 1, n) + countMaze(m, n - 1);
// };
// console.log(countMaze(4, 3));

////////////////////////////////////////
// Subsequences Recursively

// let subSet = (nums) => {
//   let result = [];
//   printSubSequence(nums, 0, [], result);
//   return result;
// };

// let printSubSequence = (arr = [1, 2, 3], i, curr, result) => {
//   if (arr.length === i) {
//     result.push([...curr]);
//     return;
//   }

//   printSubSequence(arr, i + 1, curr, result); // exculding
//   curr.push(arr[i]); // including
//   printSubSequence(arr, i + 1, curr, result); // including
//   curr.pop();
// };

// printSubSequence();

////////////////////////////////////////
// Generate Parentheses

// let generateParenthesis = (n, open, close, str) => {
//   if (open + close === 2 * n) {
//     console.log(str);
//     return;
//   }

//   if (open < n) {
//     generateParenthesis(n, open + 1, close, str + "(");
//   }

//   if (close < open) {
//     generateParenthesis(n, open, close + 1, str + ")");
//   }
// };

// generateParenthesis(3, 0, 0, "");

////////////////////////////////////////
// Permutations Recursively

// let permutations = (str, l, r) => {
//   if (l === r) {
//     console.log(str);
//     return;
//   }
//   for (let i = l; i <= r; i++) {
//     permutations(swap(str, i, l), l + 1, r);
//   }
// };

// let swap = (str, i, j) => {
//   str = str.split("");
//   let temp = str[i];
//   str[i] = str[j];
//   str[j] = temp;
//   return str.join("");
// };

// permutations("ABC", 0, 2);
