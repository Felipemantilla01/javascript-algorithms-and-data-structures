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

// the algorithm complexity is O(n^2) because we have a foreach and inside an indexOf
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

console.log("Is Same Testing");
console.log(same([1, 2, 3], [1, 4, 9]));
console.log(same([1, 2, 3], [1, 4, 9, 9]));
console.log(same([1, 2, 3, 3], [1, 4, 9, 9]));
console.log(same([], []));

/**
 * Using frecuency counter patter, in this way the algorithm complexity is reduced to O(3n) -> O(n)
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

/**
 * Example: Anagram challenge: Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase,
 * or name formed by rearraging the letters of another, such as cinema, formed from cinema.
 */

/**
 * 1. understanding the problem
 *  -   re-write: create a function to check if two strings have the same number and frecuency characters, must return true or false
 *  -   what are the inputs: two strings
 *  -   what are the outputs: a boolean value
 */

/**
 * 2. Explore concrete example
 *  -   simple examples
 * isAnagram("cinema","iceman") : true
 * isAnagram("cinema","icemanw") : false
 *  -   more complex examples
 * isAnagram("aazr","zraa") : true
 * isAnagram("aazrrraax","zraarraxa") : true
 *  -   void inputs
 * isAnagram("","") : true
 *  -   invalid inputs
 * isAnagram(332,123) : false
 * isAnagram(321,123) : false
 */

/**
 * 3. Break it down
 *  -   Create a pseudo code with comments writing everything the code should do, as specific as you can do it
 */

function isAnagram(str1, str2) {
  // validate inputs, check if both are strings
  // both must be have the same length
  // convert both strings to mapped objects and count the frecuency of each char
  // iterate on the first mapped string object
  // if the char dont exist in the second mapped sttring return false
  // if the char frecuecy on the first mapped object is different to the second one return false
  // return true
}

/**
 * 4. Simplify
 *  -   If you have any difficulty, avoid it by the moment and simplify until the end, then come back and solve it
 */

function isAnagram(str1, str2) {
  // validate inputs, check if both are strings
  if (typeof str1 !== "string" || typeof str2 !== "string") {
    return false;
  }
  // both must be have the same length
  if (str1.length !== str2.length) {
    return false;
  }
  // convert both strings to mapped objects and count the frecuency of each char
  let frecuencyCounter1 = {};
  let frecuencyCounter2 = {};
  for (let char of str1) {
    frecuencyCounter1[char] = (frecuencyCounter1[char] || 0) + 1;
  }
  for (let char of str2) {
    frecuencyCounter2[char] = (frecuencyCounter2[char] || 0) + 1;
  }
  // iterate on the first mapped string object
  for (let key in frecuencyCounter1) {
    // if the char dont exist in the second mapped sttring return false
    if (!frecuencyCounter2[key]) {
      return false;
    }
    // if the char frecuecy on the first mapped object is different to the second one return false
    if (frecuencyCounter1[key] != frecuencyCounter2[key]) {
      return false;
    }
  }
  // return true
  return true;
}

/**
 * 5. Lookback and refactor
 */

// testing
console.log("Is Anagram Testing");
console.log(isAnagram("", ""));
console.log(isAnagram("aasssdsds", "asdaddsds"));
console.log(isAnagram("cinema", "iceman"));
console.log(isAnagram("aazrrraax", "zraarraxa"));
console.log(isAnagram(321, 123));
