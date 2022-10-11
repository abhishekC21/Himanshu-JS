// Object.freeze
// cannot modify the values
// cannot add or delete propreties.

// let student = {
//   name: "Abhishek",
//   course: "Relevel",
// };
// console.log(student);
// Object.freeze(student);
// student.marks = 80;
// console.log(student);

////////////////////////////////////
// Object.seal
// cannot add or remove propreties.
// cannot modify the values of existing propreties.

// const student1 = {
//   name: "Abhishek",
//   course: "Relevel",
// };
// console.log(student1);
// Object.seal(student1);
// let student2 = Object.create(student1);
// student2.marks = 80;
// console.log(student2);

// let student1 = {
//   name: "Abhishek",
//   course: "Relevel",
// };
// console.log(student1);
// Object.seal(student1);
// let student2 = Object.create(student1);
// student1.marks = 80;
// console.log(student1);

// let arr = [2, 8, 13, 3, 16, 32];
// function evenElements(arr) {
//   let result = [];
//   for (let value of arr) {
//     if (value % 2 === 0) {
//       result.push(value);
//     }
//   }
//   return result;
// }

// function oddElements(arr) {
//   let result = [];
//   for (let value of arr) {
//     if (value % 3 === 0) {
//       result.push(value);
//     }
//   }
//   return result;
// }

// console.log(evenElements(arr));
// console.log(oddElements(arr));

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
// let isEven = function (value) {
//   return value % 2 === 0;
// };
// console.log(array.filter(isEven));
// console.log(array.filter(isEven));

// let isDivisibleBy3 = function (value) {
//   return value % 3 === 0;
// };
// filter(array, isDivisibleBy3);

//////////////////////////////////
// Map function

// let arr = [1, 2, 3, 4, 5, 6];

// let square = function (value) {
//   return value * value * value;
// return "Nothing";
// return null;
// };
// console.log(arr.map(square));

// let arr = ["kite", "bat", "ball"];
// let s = function (value) {
//   return value + "s";
// };
// console.log(arr.map(s));
/////////////////////////////////////////
// Sort

// let unsortedArray = [2, 1, 0, 6, 9, 5];
// let compare = function (a, b) {
//   return a - b;
//   // return b - a;
// };
// console.log(unsortedArray.sort(compare));

// neagtive ---> first parameter will be placed first
// positive ---> second parameter will be placed first

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
// let graterthan75 = function (student) {
//   return student.marks >= 75;
// };

// foreach
// students.forEach(print);

// function print(student) {
//   console.log(student);
// }

// for (let student of students.filter(graterthan75)) {
//   console.log(student);
// }

///////////////////////////////////
// reverse
// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.reverse());

/////////////////////////////////
// reduce

// let nonReduced = [1, 2, 3, 4, 5, 6];

// let reduceSum = function (initializer, curr) {
// return initializer + curr;
//   return initializer - curr;
// };

// function customReduce(arr, initializer) {
//   for (let value of arr) {
//     initializer = initializer + value;
//   }
// }

// console.log(nonReduced.reduce(reduceSum));

/////////////////////////
// split
// let str = "Hello World";
// console.log(str.split("l"));

///////////////////////////
// slice
// let unsliced = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(unsliced.slice(0, 3));
// console.log(unsliced.slice(1, -2));

// function removeDuplicates(values) {
//   let obj = {};
//   for (let value of values) {
//     obj[value] = true;
//   }
//   return Object.keys(obj);
// }
// console.log(removeDuplicates([1, 2, 5, 5, 9, 9, "str", "str"]));

// let student = {
//   name: "Abhishek",
//   course: "Relevel",
// };
// let keyName = "name";
// student.name = "om";
// console.log(student.name);
// console.log(student[keyName]);

// function run(func) {
//   console.log(func(2, 3));
// }

// let sum = function (a, b) {
//   return a + b;
// };

// run(sum);
/*
let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let i = Math.floor(Math.random() * 5);
for (var j = 0; j < i; j++) {
  let temp = arr.pop();
  arr.unshift(temp);
}
console.log(arr);
*/

// let arr = [545, 455, 1, 21, 85, 94, 89];
// let compare = function (a, b) {
//   return a - b;
// };
// console.log(arr.sort(compare));

var arr = [1, 2, 3, 4, 5, 6];
arr.forEach((val) => console.log(val));
