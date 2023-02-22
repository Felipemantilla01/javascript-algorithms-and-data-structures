function bubbleSort(arr) {
  let swapped = true;
  while (swapped) {
    swapped = false;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] > arr[i + 1]) {
        // swap!!
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        swapped = true;
      }
    }
  }
  return arr;
}

console.log("bubbleSort", bubbleSort([5, 98, 7, 5, 6, 8, 12, 2, 56]));
