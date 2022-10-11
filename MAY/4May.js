// let arr1 = [2, 5, 10, 20, 80];

// let arr1 = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// let arr1 = [2, 10, 20];

// for (let i = 0; i < arr1.length; i = i + 2) {
//   console.log(arr1[i]);
// }

// for (let value of arr1) {
//   for (let insideValue of value) {
//     console.log(insideValue);
//   }
// }

// for (let value of arr1[1]) {
//   console.log(value);
// }

// for (let index in arr1) {
//   console.log(index);
// }

// for (let value of arr1) {
//   console.log(value);
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

// console.log(obj); // {a: 16, b:3}
// console.log(obj1); // {a; 9, b:10}

// function modify(obj, obj1) {
//   obj.a = 16;
//   obj1 = { str: "Hello" };
// }

// let smartPhone = {
//   camera: "64px",
//   storage: "128Gb",
//   makeAcall: function (name) {
//     return `calling ${name}`;
//   },
// };

// let smartPhone1 = {
//   camera: "64px",
//   storage: "128Gb",
//   makeAcall: function (name) {
//     return `calling ${name}`;
//   },
// };

// constructor
// function smartPhone(camera, storage) {
//   this.camera = camera;
//   this.storage = storage;

//   return 22;
// }

// let smartPhone1 = new smartPhone("64px", "64GB");
// let smartPhone2 = new smartPhone("32px", "128GB");

// console.log(smartPhone2);

// let smartPhone1 = smartPhone;

// smartPhone1.camera = "128px";

// console.log(smartPhone1 === smartPhone);

// let smartphone = {
//   camera: "64px",
//   storage: "128Gb",
//   makeAcall: function (name) {
//     return `calling ${name}`;
//   },
// };

// of --> values
// in --> index and keys

// iteration of objects
// for (let key in smartphone) {
// console.log(`${key} : ${smartphone[key]}`);
// console.log(key);
// }

// // object.entries
// let entries = Object.entries(smartphone);
// for (let entry of entries) {
//   console.log(entry);
// }

// object.values
// let values = Object.values(smartphone);
// for (let value of values) {
//   console.log(value);
// }

// object.values
// let values = Object.values(smartphone);
// for (let value of values) {
//   console.log(value);
// }

// let smartphone1 = object.create(smartphone);
// let smartPhone2 = object.create(smartphone);
// console.log(smartphone1 === smartphone);

// auth
// function user(username, passward) {
//   this.username = username;
//   this.passward = passward;
//   this.authenticate = function (username, passward) {
//     if (this.username === username && this.passward === passward) {
//       console.log("Authentication sucessfull");
//     } else {
//       console.log("Auth Fail");
//     }
//   };
// }

// let user1 = new user("divyansh", "div123");

// user1.authenticate("divyansh", "div123");

// const arr = ["a", "b", "c", "a", "c", "d", "a"];

// let obj = {};
// for (let value of arr) {
//   obj[value] = 1;
// }
// console.log(obj);

// const car = [
//   {
//     color: "Black",
//     speed: "120Kmph",
//     brand: "Audi",
//     start: function () {
//       console.log("car started");
//     },
//     stop: function () {
//       console.log("car stopped");
//     },
//   },
//   {
//     color: "Red",
//     speed: "100Kmph",
//     brand: "BMW",
//     start: function () {
//       console.log("car started");
//     },
//     stop: function () {
//       console.log("car stopped");
//     },
//   },
// ];

// for([[keys, values] of Object.arr(car)]){
//   console.log(`My car is ${arr.brand} and color is ${arr.color}`);
}
