function bubbleSort(arr) {
  let swapped = true;
  let limit = arr.length - 1;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < limit; i++) {
      if (arr[i] > arr[i + 1]) {
        // swap!!
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
    limit -= 1; // each time we put at end one number, so we dont need to go there in the loop
  }
  return arr;
}

// console.log("bubbleSort", bubbleSort([5, 98, 7, 5, 6, 8, 12, 2, 56]));

function selectionSort(array) {
  let tempMinIndex = 0;
  let start = 0;
  let end = array.length - 1;

  while (start < end) {
    for (let index = start; index < array.length - 1; index++) {
      if (array[index] <= array[index + 1]) {
        if (array[index] < array[tempMinIndex]) {
          tempMinIndex = index;
        }
      } else {
        if (array[index + 1] < array[tempMinIndex]) {
          tempMinIndex = index + 1;
        }
      }
    }
    // after find the tempIndex, we need to swap it
    if (array[start] !== array[tempMinIndex]) {
      [array[start], array[tempMinIndex]] = [array[tempMinIndex], array[start]];
    }
    start += 1;
    tempMinIndex = start;
  }

  return array;
}

// console.log(
//   "selectionSort",
//   selectionSort([5, 98, 1, 7, 5, 3, 32, 201, 6, 8, 12, 2, 56])
// );

function insertionSort(array) {
  let searchIndex = 1;
  let end = array.length;
  while (searchIndex < end) {
    let tempIndex = searchIndex;
    for (let index = tempIndex - 1; index >= 0; index--) {
      if (array[tempIndex] < array[index]) {
        // swap
        [array[tempIndex], array[index]] = [array[index], array[tempIndex]];
        tempIndex -= 1;
      }
    }
    searchIndex += 1;
  }
  return array;
}

// console.log("insertionSort", insertionSort([3, 2, 44, 38, 5, 1 ,65, 47, 15, 4]));

function mergeSortedArrays(arr1, arr2) {
  let array = [];
  let pointer1 = 0,
    pointer2 = 0;
  let limit = arr1.length + arr2.length;
  while (pointer1 + pointer2 < limit) {
    let comparator1 = arr1[pointer1] ? arr1[pointer1] : Infinity;
    let comparator2 = arr2[pointer2] ? arr2[pointer2] : Infinity;
    if (comparator1 < comparator2) {
      array.push(comparator1);
      pointer1++;
    } else {
      array.push(comparator2);
      pointer2++;
    }
  }
  return array;
}

// console.log(
//   "mergeSortedArrays",
//   mergeSortedArrays([1, 4, 5, 15, 25], [2, 3, 6, 12, 17, 24, 45])
// );

function mergeSort(array) {
  if (array.length <= 1) return array;
  let midpoint = Math.floor(array.length / 2);
  let left = mergeSort(array.slice(0, midpoint));
  let right = mergeSort(array.slice(midpoint));
  return mergeSortedArrays(left, right);
}

console.log("mergeSort", mergeSort([1, 4, 5, 15, 25, 3, 2, 6, 24, 54, 34, 67]));
