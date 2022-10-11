// const cities = ["London", "Mumbai", "Chennai", "Bangalore", "Kerala"]; // Array Literals
// cities[6] = "agra";
// console.log(cities[5]);
// let length = cities.length;
// console.log(length);
// for (let i = 0; i < cities.length; i++) {
//   console.log(cities[i]);
// }

// To create an Single-Dimension array

// var colors = [" Blue ", " Green ", " Yellow "];
// console.log(colors[(0, 1)]);

//example to create multi-dimensional Array

// var items = [
//   [2, 31],
//   [5, 6],
//   [7, 8],
// ];
// console.log(items[0][0]);
// console.log(items[0][1]);
// console.log(items[1][0]);
// console.log(items[1][1]);
// console.log(items[2][0]);
// console.log(items[2][1]);
// console.log(items);

/////////////////////////////////////
// const cities = new Array("London", " Mumbai", " Cherry", " Kerala ");
// console.log(cities[0]);
// console.log(cities[1]);
// console.log(cities);

///////////////////////////////////
// Object literal
// let laptop = {
//   make: "Dell",
//   model: "Alieenware",
//   memory: ["SSD", "HDD"],
//   cores: 8,
//   memorySize: [256, 512],
// };
// console.log(laptop.make);
// console.log(laptop["make"]);

/////////////////////////////////////
// Creating Objects using New Keyword

// const laptop = new laptop();
// laptop.make = "Apple";
// laptop.model - "MacBook Pro";
// laptop.cores = 8;

/////////////////////////////////////
// let student = {
//   name: "Abhishek",
//   course: "FE-6",
//   rollNo: 22,
//   marks: [
//     {
//       name: "English",
//       nos: 80,
//     },
//     {
//       name: "Hindi",
//       nos: 92,
//     },
//   ],
// };
// console.log(student.marks[1].nos);

// let smartphone = {
//   canera: "64px",
//   storage: "128GB",
//   callLogs: {
//     numberofCalls: 102,
//   },
//   makeAcall: function (name) {
//     return `Calling ${name}`;
//   },
// };
// console.log(smartphone.makeAcall("Abhishek"));
// console.log(smartphone.callLogs.numberofCalls);

/////////////////////////////////////////////
/*
const car = {
  color: "black",
  speed: "120kph",
  brand: "Audi",
  start: function () {
    console.log("Car started");
  },
  stop: function () {
    console.log("car stopped");
  },
};
const newcar = car;
newcar.brand = "BMW";
newcar.speed = "100kph";
console.log(car.speed);
console.log(car.brand);
*/

// Iteration
// let arr1 = [2, 5, 10, 20, 80];
// for (let i = 0; i < arr1.length; i++) {
//   console.log(arr1[i]);
// }

// let arr1 = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// of keyword
// for (let value of arr1[1]) {
//   for (let insideValue of value) {
//   console.log(insideValue);
//   console.log(value);
//   }
// }

// let arr1 = [2, 10, 20];
// in keyword
// for (let index in arr1) {
//   console.log(arr1[index]);
// }

// var a = 2;
// console.log(a); // 2
// a = modify(a);
// console.log(a); // 3
// function modify(b) {
//   b = 3;
//   return b;
// }

// let obj = {
//   a: 2,
//   b: 3,
// };

// let obj1 = {
//   a: 9,
//   b: 10,
// };

// modify(obj, obj1);

// console.log(obj);
// console.log(obj1);

// function modify(obj, obj1) {
//   obj.a = 16;
//   obj1 = { str: "Hello" };
// }

// let smartphone = {
//   camera: "64px",
//   storage: "128GB",
//   makeAcall: function (name) {
//     return `Calling ${name}`;
//   },
// };

// let smartphone1 = {
//   camera: "64px",
//   storage: "128GB",
//   makeAcall: function (name) {
//     return `Calling ${name}`;
//   },
// };

// console.log(smartphone1 === smartphone);

// constructor

// function smartphone(camera, storage) {
//   this.camera = camera;
//   this.storage = storage;

//   return 22;
// }

// let smartphone1 = smartphone("64px", "64GB");
// let smartphone2 = new smartphone("32px", "128GB");

// console.log(smartphone2);

// let smartphone = {
//   camera: "64px",
//   storage: "128GB",
//   makeAcall: function (name) {
//     return `Calling ${name}`;
//   },
// };

// let smartphone1 = Object.create(smartphone);
// console.log(smartphone === smartphone1);

// iteration of objects
// for (let key in smartphone) {
//   console.log(key);
//   console.log(`${key} : ${smartphone[key]}`);
// }

// object.entries

// let entries = Object.entries(smartphone);
// for (let entry of entries) {
//   console.log(entry);
// }

// let keys = Object.keys(smartphone);
// for (let key of keys) {
//   console.log(key);
// }

// let values = Object.values(smartphone);
// for (let value of values) {
//   console.log(value);
// }

/////////////////////////////
// const arr = ["a", "b", "c", "a", "c", "d", "a"];
// let obj = {};
// for (let value of arr) {
//   obj[value] = 1;
// }
// console.log(Object.keys(obj));

// let car = [
//   {
//     color: "black",
//     speed: "120kph",
//     brand: "Audi",
//     start: function () {
//       console.log("Car started");
//     },
//     stop: function () {
//       console.log("car stopped");
//     },
//   },
//   {
//     color: "Red",
//     speed: "100kph",
//     brand: "BMW",
//     start: function () {
//       console.log("Car started");
//     },
//     stop: function () {
//       console.log("car stopped");
//     },
//   },
// ];

// for ([key, value] of Object.entries(car)) {
//   console.log(`My car is ${value.brand} and color is ${value.color}`);
// }

// for (let values of Object.entries(car)) {
//   console.log(`My car is ${values.brand} and color is ${values.color}`);
// }

// function removeDuplicates(values) {
//   let obj = {};
//   for (let value of values) {
//     obj[value] = true;
//   }
//   return Object.keys(obj);
// }
// console.log(removeDuplicates([1, 2, 2, 5, 9, 9]));

// let student = {
//   name: "Biswajit",
//   course: "relevel",
// };
// let keyName = "name";
// console.log(student[keyName]);
// console.log(student.name, student.course);

// function run(passedSum) {
//   return passedSum(2, 3);
// }
// let sum = function (a, b) {
//   return a + b;
// };
// console.log(run(sum));
