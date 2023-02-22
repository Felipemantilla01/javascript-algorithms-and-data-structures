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

console.log("bubbleSort", bubbleSort([5, 98, 7, 5, 6, 8, 12, 2, 56]));
