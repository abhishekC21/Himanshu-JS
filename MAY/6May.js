// function removeDuplicates(values) {
//   let obj = {
//     str: "Hello",
//   };
//   for (let value of values) {
//     obj[value] = true;
//   }
//   return Object.keys(obj);
// }
// console.log(removeDuplicates([1, 2, 2, 5, 9, 9, 9, 5]));

// let student = {
//   name: "Abhishek",
//   course: "relevel",
// };
// let keyName = "name";
// console.log(student[keyName]);

// function run(func) {
// console.log(func(2, 3));
// return func(2, 3);
// }

// let sum = function (a, b) {
// return a + b;
// };

// console.log(run(sum));

// Object.freeze
/*
1. 
2. cannot add or delete properties. 
*/
// const student = {
// name: "charnjit",
// course: "relevel",
// };
// console.log(student);
// Object.freeze(student);
// student.marks = 80;
// student.name = "Abhishek";
// console.log(student);

// Object.seal

/*
1. cannot add or remove props.
2. can modify the value of existing props.  
*/

// const student1 = {
// name: "charnjit",
// course: "relevel",
// };
// console.log(student1);
// Object.seal(student1);
// let student2 = Object.create(student1);
// student1.marks = 80;
// console.log(student1);

/////////////////////////////////////////
// filteration
// function evenElements(arr) {
//   let result = [];
//   for (let value of arr) {
//     if (value % 2 === 0) {
//       result.push(value);
//     }
//   }
//   return result;
// }

// function divisibleBy3(arr) {
//   let result = [];
//   for (let value of arr) {
//     if (value % 3 === 0) {
//       result.push(value);
//     }
//   }
//   return result;
// }

// function filter(arr, conditionFunc) {
//   let result = [];
//   for (let value of arr) {
//     if (conditionFunc(value)) {
//       result.push(value);
//     }
//   }
//   return result;
// }

// let array = [1, 2, 4, 8, 3, 9, 16];
// isEven = function (value) {
// return value % 2 === 0;
// return true;
// return false;
// };
// console.log(filter(array, isEven));
// console.log(array.filter(isEven));

// let isDivisibleBy3 = function (value) {
//   return value % 3 === 0;
// };
// console.log(filter(array, isDivisibleBy3));

//////////////////////////
// map function

// let arr = [1, 2, 3, 4, 5, 6];

// console.log(
//   arr.map(function (value) {
//     return value * value;
//   })
// );

// let square = function (value) {
// return value * value;
// return "nothing";
// return null;
// };
// console.log(arr.map(square));
// console.log(arr);

//////////////////////////////////////
// sort
// let unsortedArray = [2, 1, 0, 6, 9, 5];
// let compare = function (a, b) {
//   return a - b;
// };

// console.log(unsortedArray.sort(compare));

// let unsortedArray = [2, 1, 0, 6, 9, 5];
// let compare = function (a, b) {
//   return b - a;
// };

// console.log(unsortedArray.sort(compare));

// negative --> first parameter will be placed first
// positive --> second parameter will be placed first

// let students = [
//   {
//     name: "sadik",
//     marks: 99,
//   },
//   {
//     name: "kushagra",
//     marks: 60,
//   },
//   {
//     name: "sai",
//     marks: 50,
//   },
//   {
//     name: "jaylakshmi",
//     marks: 90,
//   },
// ];

// let greaterthan75 = function (student) {
//   return student.marks >= 75;
// };

// for each
// students.forEach(print);

// function print(student) {
//   console.log(student);
// }

// for (let student of students.filter(greaterthan75)) {
//   console.log(student);
// }

// let arr = [1, 2, 3, 4, 5, 6];

// let square = function (value) {
// return value * value;
// };
// reverse
// console.log(arr.reverse());

///////////////////////////////////////
// reduce

// let nonReduced = [1, 2, 3, 4, 5, 6];

// let reduceSum = function (initializer, curr) {
// return initializer + curr;
// return curr + 100; // 106
// return initializer; // 1
// return initializer - curr;
// };
// console.log(nonReduced.reduce(reduceSum));

// function customReduce(arr, initializer) {
//   for (let value of arr) {
//     initializer = initializer + value;
//   }
//   return initializer;
// }

// split
let str = "Hello World";
console.log(str.split(" "));

// slice
let unsliced = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(unsliced.slice(1, -2));
