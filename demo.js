// let num = 1;
// if (num === 1) {
//   console.log("ONE");
// } else {
//   console.log("UNKNOWN");
// }

// let num = 1;
// switch (num) {
//   case 1:
//     console.log("ONE");
// break;
//   case 2:
//     console.log("TWO");
//     break;
//   case 3:
//     console.log("THREE");
//     break;
//   default:
//     console.log("UNKNOWN");
//     break;
// }

// var a = 15;
// var b = 11;
// var c = a > b ? (b > a ? 20 : -1) : 15;
// console.log(c);

// for loop
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// while loop
// let i = 1;
// while (i <= 3) {
//   console.log(i);
//   i++;
// }

// var sum = 0;
// for (var i = 0, j = 0; i < 10 && j < 10; ++i, j = i + 2) {
//   console.log(i);
//   console.log(j);
//   sum += i;
// }
// console.log(sum);

// let i = 0;
// while (i < 6) {
//   if (i === 3) {
//     // break;
//     continue;
//   }
//   i = i + 1;
//   console.log(i);
// }

// for (let i = 0; i < 10; i++) {
//   if (i === 3) {
//     // break;
//     continue;
//   }
//   console.log(i);
// }

// var i, j;
// for (i = 1; i <= 2; i++) {
//   for (j = 1; j <= 2; j++) {
//     if (i === j) {
//       continue;
//     }
//     console.log(i, j);
//   }
// }

// const x = 1 % "2";
// const x = true + 10;
// const x = false + 10;
// console.log(x);

// let n = 100;
// isPerfect = false;

// for (let i = 1; i < 10; i++) {
//   if (i * i === n) {
//     isPerfect = true;
//     break;
//   }
// }
// if (isPerfect) {
//   console.log("perfect square");
// } else {
//   console.log("not a perfect square");
// }

// let n = 54;
// let result;
// if (n % 2 === 0) {
//   console.log("EVEN");
//   result = "EVEN";
// } else {
//   result = "ODD";
//   console.log("ODD");
// }
// console.log(result);

// var one;
// var two = "A";
// switch (two) {
//   case "A": {
//     one += "10";
//     break;
//   }
//   case "B": {
//     one += "9";
//     break;
//   }
//   case "C": {
//     one += "8";
//     break;
//   }
//   default:
//     one += "0";
// }

// console.log(one);

// var i=3;
// var j=2;
// var k=0;
// If(i==j)
// document.write(i);
// elseif(i==j)
// document.write(i);
// else
// document.write(k);

// var i = 1,
//   j = 0;
// for (i = 0; i < 5; i++) {
//   for (j = 0; j < 4; j++) {
//     if (i > 1) break;
//   }
//   console.log("Relevel");
// }

// function
// function greet() {
//   console.log("Hello");
// }
// greet();

// function square(number) {
//   return number * number;
// }
// var res = square(2);

// function expression

// let sayHi = function () {
//   console.log("Hi");
// };
// sayHi();

// add(2, 3);
// function add(a, b) {
//   console.log(a + b);
// }

// var add = function (a, b) {
//   console.log(a + b);
// };
// add(2, 3);

// global scope

// var name = "Hammad";
// console.log(name);

// function logName() {
//   console.log(name);
// }
// logName();

// function somefunction() {
//   function someOtherfunction() {}
// }

// function anotherFunction() {}

//////////////////////////////////////////////
// 1)
/*
let temp = 19;
let isRaning = false;

if (temp >= 20 && temp <= 25 && isRaning === false) {
  console.log("Yay! you can go out to play");
} else if (temp >= 18 && temp <= 20 && isRaning === false) {
  console.log("stay inside the play school");
} else {
  console.log("Go home and stay there");
}
*/

// 2)
/*
let obtainedMarks = 39;
let result = obtainedMarks >= 40 ? "Pass" : "Fali";
console.log(`You ${result} in the exam.`);
*/

// 3)
/*
let x = -1;

switch (true) {
  case x === 0:
    text = "The number is Zero";
    break;
  case x > 0:
    text = "The number is positive";
    break;
  case x < 0:
    text = "The number is negative";
    break;

  default:
    text = "no value found";
    break;
}
console.log(text);
*/

// 4)
/*
let hcf_value;

const firstNumber = 16;
const secondNumber = 8;

for (let i = 1; i <= firstNumber && i <= secondNumber; i++) {
  if (firstNumber % i === 0 && secondNumber % i === 0) {
    hcf_value = i;
  }
}
console.log(`HCF ${firstNumber} and ${secondNumber} is ${hcf_value}`);
*/

// 5)
/*
function reverseString(string_value) {
  let updated_string = "";
  for (let i = string_value.length - 1; i >= 0; i--) {
    updated_string += string_value[i];
  }
  return updated_string;
}
const input_string = "Coding is fun";
const output = reverseString(input_string);
console.log(output);
*/

// 6)
/*
const firstNumber = 56;
const secondNumber = 84;
const thirdNumber = 15;
let largestNumber;

if (firstNumber >= secondNumber && firstNumber >= thirdNumber) {
  largestNumber = firstNumber;
} else if (secondNumber >= firstNumber && secondNumber >= thirdNumber) {
  largestNumber = secondNumber;
} else {
  largestNumber = thirdNumber;
}
console.log(`The largest value of number is ${largestNumber}`);
*/

// 7)
/*
function generateSumOfDigits(number_passed) {
  var output = 0;
  while (number_passed != 0) {
    output += number_passed % 10;
    number_passed = parseInt(number_passed / 10);
  }
  return output;
}
var value = 899;
console.log(generateSumOfDigits(value));
*/

// 8)
/*
let output_value = 0;
const input_value = 153;

let temporary_value = input_value;
while (temporary_value != 0) {
  let reminder_value = temporary_value % 10;

  output_value += reminder_value * reminder_value * reminder_value;

  temporary_value = parseInt(temporary_value / 10);
}

if (output_value === input_value) {
  console.log(`${input_value} is an armstrong number`);
} else {
  console.log(`${input_value} is not an armstrong number`);
}
*/
