// Bubble sort

// let swap = (arr, a, b) => {
//   let temp = arr[a];
//   arr[a] = arr[b];
//   arr[b] = temp;
// };

// let bubblesort = (arr) => {
//   let n = arr.length;

//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 1; j < n - i - 1; j++) {
//       if (arr[j - 1] > arr[j]) {
//         swap(arr, j - 1, j);
//       }
//     }
//   }
// };

// let arr = [5, 2, 1, 6, 7, 89];
// bubblesort(arr);
// console.log(arr);

////////////////////////////////
// 3rd largest number

// let swap = (arr, a, b) => {
//   let temp = arr[a];
//   arr[a] = arr[b];
//   arr[b] = temp;
// };

// let bubblesort = (arr) => {
//   let n = arr.length;
//   for (let i = 0; i < k; i++) {
//     for (let j = 1; j <= n - i - 1; j++) {
//       if (arr[j - 1] > arr[j]) {
//         swap(arr, j - 1, j);
//       }
//     }
//   }
// };

// let arr = [5, 4, 3, 2, 1];
// let k = 3;
// bubblesort(arr, k);
// console.log(arr[arr.length - k]);

// let swap = (abhishek, a, b) => {
//   let temp = abhishek[a];
//   arr[a] = abhishek[b];
//   arr[b] = temp;
// };

/////////////////////////////////////

// let bubblesort = (arr) => {
//   let n = arr.length;
//   for (var i = 0; i < k; i++) {
//     for (let j = 1; j <= n - i - 1; j++) {
//       if (arr[j - 1] > arr[j]) {
//           let temp=arr[j];
//           arr[j]=arr[j-1];
//           arr[j-1]=temp
//         // swap(arr, j - 1, j);
//       }
//     }
//   }
//   return arr[i-1]
// };

// let arr = [28, 36, 12, 38, 73,89,32];
// let k = 4;
//i=0 [28, 12, 36, 38, 7

////////////////////////////////////////
// Selection sort

// let swap = (arr, i, j) => {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// };

// let selectionSort = (arr) => {
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     let minIndex = i;
//     for (let j = i; j < n; j++) {
//       if (arr[minIndex] > arr[j]) {
//         minIndex = j;
//       }
//     }
//     swap(arr, i, minIndex);
//   }
// };

// let arr = [5, 4, 3, 2, 1, 6, 6];
// selectionSort(arr);
// console.log(arr);

// const swap = (swapArr, a, b) => {
//   let temp = swapArr[a];
//   swapArr[a] = swapArr[b];
//   swapArr[b] = temp;
// };
// const selectionShort = (arr) => {
//   for (let i = 0; i < arr.length; i++)
//     for (let j = i; j < arr.length; j++) if (arr[i] > arr[j]) swap(arr, i, j);
//   return arr;
// };

// console.log(selectionShort([5, 4, 3, 2, 1, 6, 8]));

// Input : [“India”,”Australia”,”China”,”Russia”,”Brazil”,”Japan”]
// Output: [”Australia”,”Brazil”,”China”,“India”,”Japan”,”Russia”]
// Hint: String comparison can be done using localeCompare()

// let swap = (arr, a, b) => {
//   let temp = arr[a];
//   arr[a] = arr[b];
//   arr[b] = temp;
// };

// let countrySort = (arr) => {
//   let n = arr.length;
//   for (let i = 0; i < n - 1; i++) {
//     for (let j = 1; j < n - i; j++) {
//       if (arr[j - 1].localeCompare(arr[j]) === 1) {
//         swap(arr, j - 1, j);
//       }
//     }
//   }
//   return arr;
// };
// let arr = ["India", "Australia", "China", "Russia", "Brazil", "Japan"];
// console.log(countrySort(arr));

// let countrySort = (arr) => {
//   let n = arr.length;
//   for (let i = 0; i < n; i++) {
//     for (let j = i; j < n; j++) {
//       if (arr[i].localeCompare(arr[j]) === 1) {
//         swap(arr, i, j);
//       }
//     }
//   }
//   return arr;
// };
// let arr = ["India", "Australia", "China", "Russia", "Brazil", "Japan"];

// console.log(countrySort(arr));

////////////////////////////////////////
// Insertion sort

// let swap = (arr, i, j) => {
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
// };

// let insertionSort = (arr) => {
//   let n = arr.length;
//   for (let i = 1; i < n; i++) {
//     debugger;
//     let j = i - 1;
//     debugger;
//     let person = arr[i];
//     debugger;
//     while (j >= 0 && arr[j] > person) {
//       // swap(arr, j, j + 1);
//       debugger;
//       arr[j + 1] = arr[j];
//       debugger;
//       // j = j - 1;
//       j--;
//       debugger;
//     }
//     debugger;
//     arr[j + 1] = person;
//     debugger;
//   }
//   debugger;
// };

// // let arr = [5, 4, 2, 3, 1, 6, 6];
// let arr = [4, 2, 5, 3, 1, 6, 6];
// debugger;
// insertionSort(arr);
// debugger;
// console.log(arr);

/////////////////////////////////
/*
let swap = (arr, i, j) => {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
};

function bubblesort(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 1; j < n - i - 1; j++) {
      if (arr[j - 1] > arr[j]) {
        swap(arr, j - 1, j);
      }
    }
  }
}

let arr = [5, 2, 1, 6];
bubblesort(arr);
console.log(arr);
*/

///////////////////////////////////////
// Merge sort

function mergeSort(arr, l, u) {
  if (l < u) {
    mid = (l + u) / 2;
    mergeSort(a, l, mid);
    mergeSort(arr, mid + 1, u);
    merge(arr, l, mid, u);
  }
}
