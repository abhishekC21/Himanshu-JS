//////////////////////////////
// * pattern
// let rows = 7;
// let col = 5;

// let str;
// for (let i = 1; i <= rows; i++) {
//   str = "";
// add the white space to the left
//   for (let j = 1; j <= rows - i; j++) {
//     str += " ";
//   }
// add * to the output
//   for (let k = 0; k !== 2 * i - 1; k++) {
//     str += "*";
//   }
//   console.log(str);
// }

////////////////////////////////////////
// 2nd pattern
// let rows = 5;
// let str;
// for (let i = 1; i <= rows; i++) {
//   str = "";
// add the white space to the left
//   for (let j = 1; j <= rows - i; j++) {
//     str += " ";
//   }
// add values to the output
//   for (let k = 0; k != 2 * i - 1; k++) {
//     str += i;
//   }
//   console.log(str);
// }

/////////////////////////////////////////
// 3rd pattern

// let rows = 5,
//   val,
//   col;
// let str;
// for (let i = 1; i <= rows; i++) {
//   str = "";
//   val = i;
//   col = 2 * i - 1;
//   // add the white space to the left
//   for (let j = 1; j <= rows - i; j++) {
//     str += " ";
//   }
// add values to the output
//   for (let k = 0; k != col; k++) {
//     str += val;
//     if (k < col / 2 - 1) {
//       val--;
//     } else {
//       val++;
//     }
//   }
//   console.log(str);
// }

/////////////////////////////////////////////
// 2. Given an array B, it into N sub arrays in a way that the max sum of all the subarrays comes out to be minimum.
// function to check if the mid can be maximum sub arrays sum
/*
let check = (arr, mid, n, k) => {
  let count = 0;
  let sum = 0;

  for (let i = 0; i < n; i++) {
    if (arr[i] > mid) {
      return false;
    }

    // increase sum of current sub-array
    sum += arr[i];

    // if the sum if greater than mid then increase the count
    if (sum > mid) {
      count++;
      sum = arr[i];
    }
  }
  count++;

  if (count <= k) {
    return true;
  }
  return false;
};
*/

// function to find the maximum subarray sum which is minimum
/*
let solve = (arr, k, n) => {
  let max = arr.reduce((a, b) => Math.max(a, b));
  let start = max; // max sub array sum considering length of subarray as 1
  let end = 0;

  for (let i = 0; i < n; i++) {
    end += arr[i]; // max sub array sum considering length of subarray as n
  }

  // answer stores possible maximum sub array sum
  let answer = 0,
    mid;
  while (start <= end) {
    mid = parseInt(start + end) / 2;
  }
  // if mid is the possible solution
  if (check(arr, mid, n, k) === true) {
    answer = mid;
    end = mid - 1;
  } else {
    start = mid + 1;
  }
  return answer;
};
let arr = [1, 2, 3, 4];
let n = arr.length;
let k = 3;
console.log(solve(arr, n, k));
*/

/////////////////////////////////////////////////////
// 3. Create a program to check if a number is an armstrong or not. A number can be considered an Armstrong is the sum of the cube of its digit is equal to the number.
// let num = 153;
// let res = 0,
//   rem;
// let temp = num;

// while (temp > 0) {
//   rem = temp % 10;
//   res += rem * rem * rem;
//   temp = parseInt(temp / 10);

//   console.log(rem + " " + res + " " + temp);
// }

// if (num === res) {
//   console.log("Armstrong number");
// } else {
//   console.log("Not an Armstrong number");
// }

//////////////////////////////////////////////////
// 4. Given a number N, the task is to find the sum of digits of a number at even and odd places.
/*
let num = 54873;
let str = num.toString();
let sumEven = 0,
  sumOdd = 0;

for (let i = 0; i < str.length; i++) {
  if ((i + 1) % 2 === 0) {
    sumEven += parseInt(str.charAt(i));
  } else {
    sumOdd += parseInt(str.charAt(i));
  }
}
console.log(`sum even: ${sumEven}`);
console.log(`sum odd: ${sumOdd}`);
*/

//////////////////////////////////////////////////////
// 5. For a given array A, you are supposed to find out the maximum of j-i such that A[i]<=A[j]
// const arr = [4, 5, 7, 2];
// let maxIndexDiff = Number.MIN_VALUE;

// for (let i = 0; i < arr.length; i++) {
//   for (let j = i + 1; j < arr.length; j++) {
//     if (arr[i] <= arr[j]) {
//       maxIndexDiff = Math.max(maxIndexDiff, j - i);
//     }
//   }
// }
// console.log(maxIndexDiff);
