// i solved this using frecuency counter, because seems like was simpler.

/**
 * Problem: implement a function called "countUniqueValues", which accepts a sorted array, and counts the unique values
 * in the array. there can be negative numbers in the array, but it always be sorted
 */

/**
 * 1. understanding the problem
 *  -   re-write: create a function which find the unique values in on sorted array with possible negative numbers
 *  -   what are the inputs: a sorted array (including negative numbers)
 *  -   what are the outputs: a number, which means the count of unique values inside the array
 */

/**
 * 2. Explore concrete example
 *  -   simple examples
 *  countUniqueValues([1,1,1,1,1,2]) : 2
 *  -   more complex examples
 *  countUniqueValues([1,2,3,4,4,4,4,7,7,12,12,13]) : 7
 *  countUniqueValues([-2,-1,-1,0,1,2]) : 5
 *  -   void inputs
 *  countUniqueValues([]) : 0
 *  -   invalid inputs
 *  countUniqueValues() : 0
 */

/**
 * 3. Break it down
 *  -   Create a pseudo code with comments writing everything the code should do, as specific as you can do it
 */

function countUniqueValues(array) {
  // if array length > 0 continue, else return 0
  // convert the array to a mapped object counting the frecuency
  // return the number of keys into the object
}

/**
 * 4. Simplify
 *  -   If you have any difficulty, avoid it by the moment and simplify until the end, then come back and solve it
 */

function countUniqueValues(array) {
  // if array length > 0 continue, else return 0
  if (!array || !(array.length && array.length > 0)) {
    return 0;
  }
  // convert the array to a mapped object counting the frecuency
  let mappedArray = {};
  for (let item of array) {
    mappedArray[item] = (mappedArray[item] || 0) + 1;
  }
  // return the number of keys
  return Object.keys(mappedArray).length;
}

/**
 * 5. Lookback and refactor
 */

console.log(countUniqueValues([1, 1, 1, 1, 1, 2]));
console.log(countUniqueValues([1, 2, 3, 4, 4, 4, 4, 7, 7, 12, 12, 13]));
console.log(countUniqueValues([-2, -1, -1, 0, 1, 2]));
console.log(countUniqueValues([]));
console.log(countUniqueValues());
