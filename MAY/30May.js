// let students = [
//   {
//     name: "shameer",
//     course: "FE-6",
//   },
//   {
//     name: "Abhishek",
//     course: "FE-6",
//   },
//   {
//     name: "sharukh",
//     course: "FE-6",
//   },
// ];

// let studentJson = [
//   {
//     " name": "sharukh",
//     " course": "FE6",
//     " marks": 25,
//   },
// ];

// console.log(JSON.stringify(students));
// console.log("---------------------------------");
// console.log(studentJson);

// let studentsJson = '[{"name": "abhishek", "course" : "FE-6"}]';
// console.log(JSON.parse(studentsJson)[0]["name"]);

// let text = '"My name is Abhishek"';
// let text = '"My name is abhishek"';
// console.log(text);

// const text = '["Ford", "BMW", "Audi", "Fiat"]';
// const myArr = JSON.parse(text);
// console.log(myArr[0]);

// let students = [
//   {
//     name: "Abhishek",
//     marks: 92,
//   },
//   {
//     name: "Himanshu",
//     marks: 93,
//   },
//   {
//     name: "Biswajit",
//     marks: 90,
//   },
// ];

// let maxMarks = Number.MIN_SAFE_INTEGER;
// let index = -1;
// for (let i = 0; i < students.length; i++) {
//   let student = students[i];
//   if (maxMarks < student.marks) {
//     maxMarks = student.marks;
//     index = i;
//   }
// }
// console.log(students[index]);

// console.log(Math.max(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));
// let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
// console.log(Math.max(...array));

// console.log([1, 2, 3, 4, 5]);
// console.log(...[1, 2, 3, 4, 5]);

// function updating(arr, operation) {
//   let updated = [];
//   for (let element of arr) {
//     updated.push(operation(element));
//   }
//   return updated;
// }
// function double(num) {
//   return num * 2;
// }
// console.log(updating([1, 2, 3], double));

// let callback = (n) => {
//   return n ** 2;
// };
// function cube(callback, n) {
//   return callback(n) * n;
// }
// console.log(cube(callback, 4));

// let names = ["apple", "google", "microsoft", "meta"];
// let namesToUppercase = names.map((name) => name.toUpperCase());
// console.log(namesToUppercase);

// let multiply20 = (price) => price * 20;
// let divede5 = (price) => price / 5;
// console.log(divede5(multiply20(10)));

///////////////////////////////////////////////////
// Recurssion

// function a() {
//   console.log("a started");
//   b();
//   console.log("a ended");
// }

// function b() {
//   console.log("b started");
//   return;
//   console.log("b ended");
// }
// a();

// function a(n) {
//   if (n === 0) {
//     return;
//   }
//   console.log("a started", n);
//   a(n - 1);
//   console.log("a ended", n);
// }
// a(5);

// function printTillN(n) {
//   if (n === 0) {
//     return;
//   }
//   console.log(n); // pre recursive
//   printTillN(n - 1);
//   console.log(n); // post recursive
// }
// printTillN(10);

// let factorial = (n) => {
//   if (n === 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// };
// console.log(factorial(3));

// let fabonacci = (n) => {
//   if (n === 0 || n === 1) {
//     return n;
//   }
//   return fabonacci(n - 2) + fabonacci(n - 1);
// };
// console.log(fabonacci(8));

// let countDown = (fromNumber) => {
//   console.log(fromNumber);
//   let nextNumber = fromNumber - 1;
//   if (nextNumber > 0) {
//     countDown(nextNumber);
//   }
// };
// countDown(3);

// let factorial = (n) => {
//   if (n <= 1) {
//     return 1;
//   }
//   return n * factorial(n - 1);
// };
// console.log(factorial(5));

// closure
// counter

// function counter() {
//   let x = 0;
//   this.increment = () => {
//     x++;
//   };
//   this.print = () => console.log(x);
// }
// let counter1 = new counter();
// counter1.increment();
// counter1.increment();
// counter1.increment();
// counter1.print(); // 3

// let counter2 = new counter();
// counter2.increment();
// counter2.print(); // 1

// let arr = ["amit", "omkar", "priti", "anshika", "abhishek"];
// // for (let arr1 in arr) {
// //   console.log(arr1);
// // }
// let arr1 = arr.includes("manali");
// console.log(arr1);
