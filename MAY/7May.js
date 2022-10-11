// destructuring

// let cities = ["mumbai", "hydrabad", "pune", "chennai", "agra"];
// let [city1, , city2, ...restCities] = cities;
// console.log(city1, city2);
// console.log(restCities);

// function print(...input) {
//   console.log(input);
// }
// print(2, 3, 4, 5, 6, 7, 8, 9);

// let superHeros = [
//   {
//     realName: "ganghadhar",
//     heroName: "shaktiman",
//     cities: ["mumbai", "hydrabad", "pune", "chennai"],
//     villian: {
//       name: "jaikal",
//     },
//   },
//   {
//     realName: "Tony strak",
//     heroName: "Ironman",
//     cities: ["New york", "Mirzapur", "Wassepur"],
//     villian: {
//       name: "kaleen Bhaiya",
//     },
//   },
//   {
//     realName: "steven range",
//     heroName: "Dr. stranga",
//     cities: ["universe"],
//     villian: {
//       name: "doormamu",
//     },
//   },
// ];

// let [superHero1] = superHeros;
// let heroName;
// ({ heroName } = superHero1);
// console.log(heroName);

// let heroName;
// [{ heroName }] = superHeros;
// console.log(heroName);

// let [superHero1, ...restsuperHeros] = superHeros;
// restsuperHeros.forEach(function (superHero) {
//   console.log(superHero);
// });

// let [
//   ,
//   {
//     villian: { name: villianName },
//   },
// ] = superHeros;
// console.log(villianName);
// let [, { cities }] = superHero;
// console.log(cities);

// let [, superHero2] = superHeros;
// let [, superHero2] = superHeros;
// console.log(superHero2);

// let { heroName: name } = superHero;
// console.log(name);

// let {
//   cities: [, , city3],
// } = superHero;
// console.log(cities);
// console.log(city3);

// let {
//   villian: { name: villianName },
// } = superHero;
// console.log(villianName);

// let obj1 = {
//   name: "sadik",
//   age: 22,
//   marks: 98,
// };

// let obj2 = {
//   name: "sadik",
//   age: 22,
//   // marks: 98,
// };

// function checkEqual(a, b) {
//   for (let key in a) {
//     if (a[key] !== b[key]) {
//       return false;
//     }
//   }

//   for (let key in b) {
//     if (a[key] !== b[key]) {
//       return false;
//     }
//   }
//   return true;
// }
// console.log(checkEqual(obj1, obj2));

// function minimum(arr) {
//   let initializer = arr[0];
//   for (let value of arr) {
//     initializer = initializer > value ? value : initializer;
//   }
//   return initializer;
// }

////////////////////////////////
// minimum and maximum
// function min(initializer, curr) {
//   return curr < initializer ? curr : initializer;
// }
// function max(initializer, curr) {
//   return curr > initializer ? curr : initializer;
// }
// let arr = [2, 4, 62, 1, 0, 8, 9, -1];
// console.log(arr.reduce(min));
// console.log(arr.reduce(max));
// console.log(minimum(arr));

///////////////////////////////////
// reverse

// let arr = [1, 2, 3, 4, 5];

// let result = [];
// for (let i = arr.length - 1; i >= 0; i--) {
//   result.push(arr[i]);
// }
// return result;

/////////////////////////////////////
// function reverse(arr) {
//   let chintu = 0;
//   let mintu = arr.length - 1;
//   while (chintu < mintu) {
//     swap(arr, chintu, mintu);
//     chintu++;
//     mintu--;
//   }
// }

// function swap(arr, chintu, mintu) {
//   let temp = arr[chintu];
//   arr[chintu] = arr[mintu];
//   arr[mintu] = temp;
// }
// reverse(arr);
// console.log(arr);

// function count(initializer, cur) {
//   if (curr === 0) {
//     initializer + 1;
//   }
//   return initializer;
// }
// function sortZeroOneCount(arr) {
//   let countZero = arr.reduce(count);
//   let result = [];
//   for (let i = 1; i <= countZero; i++) {
//     result.push(0);
//   }
//   for (let i = 1; i <= arr.length - countZero; i++) {
//     result.push(1);
//   }
//   return result;
// }
// function sortZeroOne(arr) {
//   let chintu = 0;
//   for (let mintu = 0; mintu < arr.length; mintu++) {
//     if (arr[mintu] === 0) {
//       swap(arr, chintu, mintu);
//       chintu++;
//     }
//   }
// }
// function swap(arr, chintu, mintu) {
//   let temp = arr[chintu];
//   arr[chintu] = arr[mintu];
//   arr[mintu] = temp;
// }

// let arr = [1, 0, 0, 1, 1, 0, 1, 0];
// sortZeroOne(arr);
// console.log(arr);

////////////////////////////////
// maxprofit

function maxprofit(arr) {
  let maxprofit = 0;
  let priceTillNow = arr[0];
  for (let value of arr) {
    if (value > priceTillNow) {
      maxprofit += value - priceTillNow;
    }
    priceTillNow = value;
  }
  return maxprofit;
}
console.log(maxprofit([100, 180, 260, 310, 40, 535, 695]));
