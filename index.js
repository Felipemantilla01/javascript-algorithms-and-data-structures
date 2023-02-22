// Linear Search

function linearSearch(arr, item) {
  if (arr.length === 0) {
    return -1;
  }
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === item) return i;
  }
  return -1;
}

console.log("linearSearch:", linearSearch([1, 2, 3, 4, 5, 6, 7], 6));

// Binary Search with states
function binarySearch(arr, item) {
  if (arr.length === 0) return -1;

  let savedIndex = 0;

  while (arr.length) {
    let midPoint = Math.floor(arr.length / 2);

    if (item > arr[midPoint]) {
      arr = arr.slice(midPoint);
      savedIndex += midPoint;
    } else if (item < arr[midPoint]) {
      arr = arr.slice(0, midPoint);
    } else {
      return savedIndex + midPoint;
    }
    if (arr.length === 1) {
      return -1;
    }
  }
}

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 3));
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8));
console.log(
  binarySearch(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    6
  )
);

console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8], 8));
console.log(
  binarySearch(
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    0
  )
);

function binarySearch(arr, item) {
  let start = 0,
    end = arr.length - 1,
    middle = Math.floor((start + end) / 2);

  while (arr[middle] !== item && start <= end) {
    if (item < arr[middle]) end = middle - 1;
    else start = middle + 1;
    middle = Math.floor((start + end) / 2);
  }
  return arr[middle] === item ? middle : -1;
}