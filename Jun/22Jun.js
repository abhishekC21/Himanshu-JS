// normal function
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(2, 3));

// let sum = (a, b) => a + b;
// console.log(sum(2, 3));

// function Laptop(model, attachModel) {
//   (this.model = model), (this.ram = "6GB");
// }
// let laptop1 = new Laptop("A1234B");
// let laptop2 = new Laptop("A1234C");

// console.log(laptop1);
// console.log(laptop2);

// function Laptop(make, model, cores) {
//   this.make = make;
//   this.model = model;
//   this.cores = cores;
// }

// let mylaptop = new Laptop("Apple", "MacBook Pro", 8);
// console.log(mylaptop);

// let laptop = {
//   make: "HP",
// };

// let laptop1 = laptop;

// laptop1.make = "Dell";

// console.log(laptop1.make);
// console.log(laptop.make);

// let cities = ["delhi", "mumbai", "kolkata", "chennai", "hydrabad"];

// let [, city1, , , city2] = cities;
// console.log(city1, city2);

// let superHero = {
//   realName: "Gangadhar",
//   heroName: "Shaktiman",
//   cities: ["mumbai", "delhi", "kolkata"],
// };

// let {
//   cities: [, secodCity],
// } = superHero;
// console.log(secodCity);

// let { cities } = superHero;
// console.log(cities);

// let { heroName } = superHero;
// console.log(heroName);

// let students = [
//   {
//     name: "Amithabh",
//     marks: 50,
//     course: ["FE", "BE"],
//     nickName: "Sikku",
//   },
//   {
//     name: "shavilika",
//     marks: 51,
//     course: ["BE"],
//     nickName: "shivi",
//   },
// ];

// let secondCourse;
// let secondStudentNickname;
// [
//   {
//     course: [, secondCourse],
//   },
//   { nickName: secondStudentNickname },
// ] = students;
// console.log(secondCourse, secondStudentNickname);

//////////////////////////////////////////////////////
// Closures

// function counter() {
//   let a = 0;
//   this.count = () => {
//     a++;
//   };
//   this.print = () => {
//     console.log(a);
//   };
// }

// let counter1 = new counter();
// counter1.count();
// counter1.count();
// counter1.print();

// function sum(a, b) {
//   let c = a + b;
//   return function () {
//     console.log(`Sum is ${c}`);
//   };
// }
// let print = sum(2, 3);
// console.log(print);

//////////////////////////////////////////////////////
// pass by value

// function change(b) {
//   b = 4;
//   console.log(b);
// }
// let a = 3;
// change(a);
// console.log(a);

//////////////////////////////////////////////////////
// pass by reference

// function passByReference(b) {
//   b.prop = "changed";
//   b = { prop: "not changed" };
// }

// let obj = {
//   prop: "inital",
// };

// passByReference(obj);

//////////////////////////////////////////////////////
// filter

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let filteredArr = arr.filter((element) => element % 2 === 0);
// console.log(filteredArr);

//////////////////////////////////////////////////////
// Map function have an 3 parameters i.e. element, index, wholeArray
// Map
// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let transFormedArr = arr.map((element) => element ** 2);
// console.log(transFormedArr);

// let arr = [1, 2, 3, 4, 5, 6];
// let transFormedArr = arr.map((element, index, wholeArray) => {
//   console.log(`index -----------> ${index} array -----------> ${wholeArray}`);
// return element ** 2;
// });
// console.log(transFormedArr);

//////////////////////////////////////////////////////
// sort

// let arr = [4, 2, 1, 0, 8, 12, 9];
// ascending
// let ascending = arr.sort((a, b) => a - b);
// console.log(ascending);

// descending
// let descending = arr.sort((a, b) => b - a);
// console.log(descending);

// normal sort ---> sorted in dictonery form
// let normalArr = arr.sort();
// console.log(normalArr);

//////////////////////////////////////////////////////
// forEach
// let arr = [1, 2, 3, 4, 5, 6];
// let forEach = arr.forEach((element, index, wholeArray) => {
//   console.log(
//     `element -----> ${element} index ------> ${index} wholeArray ---------> ${wholeArray}`
//   );
// });
// console.log(forEach);

//////////////////////////////////////////////////////
// reduce

let arr = [1, 2, 3, 4, 5, 6];
let reduce = arr.reduce((accumulator, element) => accumulator + element);
console.log(reduce);
