// 10,5,8,9,1,7

// when last is pivot

function partitionFirst(arr, low, high) {
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
}

// 1, 10, 7, 5, 9, 7, 8
partitionMiddle(arr, low, high){
    let pivot = [parseInt((low+high)/2)]
    let start = low
    let end = high
    while(start < end){
        
        while(arr[start]<pivot){
            start++
        }

        while(arr[end] > pivot){
            end--
        }
        if(start<=end){
            swap(arr, start, end)
            start++
            end--

        }
    }
}


let arr = [10, 1, 14, 5, 9, 7, 8];
// partitionFirst(arr, 0, arr.length - 1);

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function quickSort(arr, low, high) {
  if (low >= high) {
    return;
  }
  let partitionIndex = partitionMiddle(arr, low, high);
  quickSort(arr, low.partitionIndex - 1);
  quickSort(arr, partitionIndex + 1, high);
}

partitionFirst(arr, 0, arr.length - 1);
console.log(arr);
