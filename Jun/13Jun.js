// let arr = [5, 2, 1, 0, 9, 6, 2];
// let comparator = (a, b) => a - b;
// console.log(arr.sort());

/*
let subArray = (arr) => {
  let sumSet = new Set();

  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];

    if (sum === 0 || sumSet.has(sum)) {
      return true;
    }

    sumSet.add(sum);
  }
  return false;
};

let arr = [3, 4, -7, 3, 1, 3, 1, -4, -2, -2];
if (subArray(arr)) console.log("found a subarray with 0 sum");
else console.log("no Sub Array");
*/

//////////////////////////////////////////////////////

// let merge = (arr1, arr2, result) => {
//   let m = arr1.length;
//   let n = arr2.length;

//   let chintu = 0,
//     mintu = 0;
//   while (chintu < m && mintu < n) {
//     if (arr1[chintu] <= arr2[mintu]) {
//       result.push(arr1[chintu]);
//       chintu++;
//     } else {
//       result.push(arr2[mintu]);
//       mintu++;
//     }
//   }
//   while (chintu < m) {
//     result.push(arr1[chintu]);
//     chintu++;
//   }

//   while (mintu < n) {
//     result.push(arr2[mintu]);
//     mintu++;
//   }
// };

// let arr1 = [5, 6, 10, 13];
// let arr2 = [2, 8, 9, 12];
// let result = [];
// merge(arr1, arr2, result);
// console.log(result);

/////////////////////////////////////
// Merge sort
// let mergeSort = (arr, left, right) => {
//   if (left >= right) {
//     return;
//   }
//   let mid = parseInt((left + right) / 2);
//   mergeSort(arr, left, mid);
//   mergeSort(arr, mid + 1, right);
//   merge(arr, left, mid, right);
// };

// let merge = (arr, left, mid, right) => {
//   let n1 = mid - left + 1;
//   let n2 = right - mid;

//   let first = new Array(n1);
//   let second = new Array(n2);

//   for (let i = 0; i < n1; i++) {
//     first[i] = arr[left + i];
//   }

//   for (let i = 0; i < n2; i++) {
//     second[i] = arr[mid + 1 + i];
//   }

//   let chintu = 0;
//   let mintu = 0;
//   let counter = left;
//   while (chintu < n1 && mintu < n2) {
//     if (first[chintu] <= second[mintu]) {
//       arr[counter] = first[chintu];
//       chintu++;
//     } else {
//       arr[counter] = first[mintu];
//       mintu++;
//     }
//     counter++;
//   }

//   while (chintu < n1) {
//     arr[counter] = first[chintu];
//     chintu++;
//     counter++;
//   }

//   while (mintu < n2) {
//     arr[counter] = second[mintu];
//     mintu++;
//     counter++;
//   }
// };

// let arr = [14, 33, 27, 10, 35, 19, 42, 44];
// mergeSort(arr, 0, arr.length - 1);
// console.log(arr);

/////////////////////////////////////////////

// 10, 5, 8, 9, 1, 7

// let partitionFirst = (arr, low, high) => {
//   let pivot = arr[high];
//   let i = low;
//   for (let j = low; j < high; j++) {
//     if (arr[j] < pivot) {
//       swap(arr, i, j);
//       i++;
//     }
//   }
//   swap(arr, high, i);
//   return i;
// };

// 1, 10, 7, 5, 9, 7, 8
// let partitionMiddle = (arr, low, high) => {
//   let pivot = arr[parseInt((low + high) / 2)];
//   let start = low;
//   let end = high;
//   while (start <= end) {
//     while (arr[start] < pivot) {
//       start++;
//     }

//     while (arr[end] > pivot) {
//       end--;
//     }
//     if (start <= end) {
//       swap(arr, start, end);
//       start++;
//       end--;
//     }
//   }
//   return end;
// };

// let arr = [1, 10, 14, 5, 9, 7, 8];
// partitionFirst(arr, 0, arr.length - 1);

// let swap = (arr, l, r) => {
//   let temp = arr[l];
//   arr[l] = arr[r];
//   arr[r] = temp;
// };

// let quickSort = (arr, low, high) => {
//   if (low >= high) return;

//   let partitionIndex = partitionFirst(arr, low, high);
//   quickSort(arr, low, partitionIndex - 1);
//   quickSort(arr, partitionIndex + 1, high);
// };

// quickSort(arr, 0, arr.length - 1);
// console.log(arr);

////////////////////////////////////////////////////////////
// Quick select

let partitionEnd = (arr, low, high) => {
  let pivot = arr[high];
  let i = low;
  for (let j = low; j < high; j++) {
    if (arr[j] < pivot) {
      swap(arr, i, j);
      i++;
    }
  }
  swap(arr, high, i);
  return i;
};

// 1, 10, 7, 5, 9, 7, 8
let partitionMiddle = (arr, low, high) => {
  let pivot = arr[parseInt((low + high) / 2)];
  let start = low;
  let end = high;
  while (start <= end) {
    while (arr[start] < pivot) {
      start++;
    }

    while (arr[end] > pivot) {
      end--;
    }
    if (start <= end) {
      swap(arr, start, end);
      start++;
      end--;
    }
  }
  return end;
};

let arr = [1, 10, 14, 5, 9, 7, 8];
// partitionFirst(arr, 0, arr.length - 1);

let swap = (arr, l, r) => {
  let temp = arr[l];
  arr[l] = arr[r];
  arr[r] = temp;
};

let quickSort = (arr, low, high) => {
  if (low >= high) return;

  let partitionIndex = partitionFirst(arr, low, high);
  quickSort(arr, low, partitionIndex - 1);
  quickSort(arr, partitionIndex + 1, high);
};

let quickSelect = (arr, k, low, high) => {
  let partitionIndex = partitionEnd(arr, low, high);

  if (partitionIndex === k - 1) {
    return arr[partitionIndex];
  } else if (partitionIndex < k - 1) {
    return quickSelect(arr, k, partitionIndex + 1, high);
  } else {
    return quickSelect(arr, k, low, partitionIndex - 1);
  }
};

console.log(quickSelect(arr, 2, 0, arr.length - 1));
