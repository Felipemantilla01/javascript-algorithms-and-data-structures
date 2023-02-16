/**
 * Problem: Write a function which takes in a string and returns counts of each character in the string
 */

/**
 * 1. Understand the problem:
 *  - rewrite in my words :  we will receive a string and we must return an object with each character inside the string and its count
 *  - what are the inputs: strings
 *  - what are the outputs: an object
 */

/**
 * 2. Explore concrete examples
 */

// start with simple examples
// function charCount("hello") : {h:1, e:1, l:2, o:1}

// more complex examples
// function charCount("hello 123!?") : {h:1, e:1, l:2, o:1, 1:1, 2:1, 3:1}
// function charCount("helLo EE 123!?") : {h:1, e:3, l:2, o:1, 1:1, 2:1, 3:1}

// empty inputs
// function charCount("") : {}
// function charCount() : {}

// invalid inputs
// function charCount(123) : {}

/**
 * 3. Break it down
 */

function charCount(str) {
  // validate the input continue or return {}
  // iterate on string and add each character into an object
  // if the char already exist in the object, ++
  // if the char dont exist in the object add it : 1
  // if isn't a valid char do nothing
  // return the object
}

/**
 * 4. Simplify
 * 5. Loopback and refactor
 */

function charCount(str) {
  // validate the input continue or return {}
  if (typeof str !== "string") {
    return {};
  }
  let result = {};
  // iterate on string and add each character into an object
  str.split("").forEach((char) => {
    let _char = char.toLowerCase();
    // if isn't a valid char do nothing
    if (!/[a-z0-9]/.test(_char)) {
      return;
    }
    // if the _char already exist in the object, ++
    if (result[_char] > 0) {
      result[_char]++;
    }
    // if the char dont exist in the object add it : 1
    else {
      result[_char] = 1;
    }
  });

  // return the object
  return result;
}

console.log(charCount("hello"));
console.log(charCount(""));
console.log(charCount("hello 123!?"));
console.log(charCount());
console.log(charCount(123));
