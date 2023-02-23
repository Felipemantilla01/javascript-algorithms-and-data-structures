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

console.log(
  "selectionSort",
  selectionSort([5, 98, 1, 7, 5, 3, 32, 201, 6, 8, 12, 2, 56])
);
