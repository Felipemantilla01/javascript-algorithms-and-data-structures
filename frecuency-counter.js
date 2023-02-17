/**
 * Example: Write a function called "same", which accepts two arrays.
 * the function should return true if every value in the array has it's corresponding value squared in the second array
 * the frecuency of values must be the same
 */

/**
 * 1. understanding the problem
 *  -   re-write: create a function, it will be receive two arrys, the function must return true if every item on the first array has it's squared value in the second array
 *      also the frecuency of each item must be the same with its corresponding squared value.
 *  -   what are the inputs: two arrays od numbers
 *  -   what are the outputs: a boolean value
 */

/**
 * 2. Explore concrete example
 */

// same([1,2,3], [1,4,9]) : true
// same([1,2,3], [1,4,11]) : false

// same([1,2,3,3], [1,4,9]) : false (the frecuency must be the same), we have two 3s but only one 9

// same(): false
// same([],[]): false

/**
 * Break it down
 */

function same(array1, array2) {
  // verify the length of both arrays, if different return true
  // iterate on the first array and calculate the square of each item
  // find each item on the new squared array on the second one and delete the item, if dont exists return false
  // return true
}

function same(array1, array2) {
  // verify the length of both arrays, if different return true
  if (array1.length !== array2.length) {
    return false;
  }
  // iterate on the first array and calculate the square of each item
  const squearedArray1 = array1.map((item) => item ** 2);

  // find each item on the new squared array on the second one and delete the item, if dont exists return false
  squearedArray1.forEach((item) => {
    let index = array2.indexOf(item);
    if (index !== -1) {
      return false;
    }
    array2.splice(index, 1);
  });

  //   return true
  return true;
}

console.log(same([1, 2, 3], [1, 4, 9]));
console.log(same([1, 2, 3], [1, 4, 9, 9]));
console.log(same([1, 2, 3, 3], [1, 4, 9, 9]));
console.log(same([], []));

/**
 * Using frecuency counter patter
 */

function same(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }
  let frecuencyCounter1 = {};
  let frecuencyCounter2 = {};

  for (let val of array1) {
    frecuencyCounter1[val] = (frecuencyCounter1[val] || 0) + 1;
  }
  for (let val of array2) {
    frecuencyCounter2[val] = (frecuencyCounter2[val] || 0) + 1;
  }
  for (let key in frecuencyCounter1) {
    if (!(key ** 2 in frecuencyCounter2)) {
      return false;
    }
    if (frecuencyCounter2[key ** 2] !== frecuencyCounter1[key]) {
      return false;
    }
  }
  return true;
}
