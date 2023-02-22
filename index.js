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

console.log(linearSearch([1, 2, 3, 4, 5, 6, 7], 6));
