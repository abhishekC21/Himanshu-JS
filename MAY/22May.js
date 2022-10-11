// destructing Array
// let cities = ["mumbai", "delhi", "chennai", "kolkata"];
// let [city1, , , city2] = cities;
// console.log(city1, city2);

// destructing Object

let superHero = [
  {
    realName: "Tony",
    heroName: "Iron Man",
    villian: {
      name: "Adhira",
      power: 22,
    },
    cities: ["new york", "california"],
  },
  {
    realName: "Gangadhar",
    heroName: "shaktiman",
    villian: {
      name: "kaal",
      power: 33,
    },
    cities: ["mumbai", "pune"],
  },
];

let [
  ,
  {
    villian: { name: villianName },
  },
] = superHero;
console.log(villianName);

// let {
//   cities: [, city3],
// } = superHero;
// console.log(city3);

// let {
//   villian: { name: villianName },
// } = superHero;
// console.log(villianName);

// 1. incase of destructing array you only have to give variable
// 2. incase of destructing object since we have key names hence, destructing will take place with key names, and variable name
// would be after :

let arr = Array(5);
console.log(arr);

let m = 3;
let n = 2;

/*
[
  [1,1]
  [1,1]
  [1,1]
]
*/

// in 1st parameter you have to give
let matrix = Array.from(Array(m), function () {
  let arr = Array(n).fill(1);
  // .map((value) => 1);
  return arr;
});
// let arr = Array(n)
//   .fill()
//   .map((value) => 1);
// console.log(arr);

for (let inside of matrix) {
  console.log(inside);
}

let numbers = [1, 2, 3, 10, 22, 5, 0];
numbers.sort((a, b) => a - b);
console.log(numbers);

function multipleVariable(a, b, ...input) {
  console.log(input);
}
multipleVariable(1, 2, 3, 4, 5, 6, 7, 8, 9, 10);
