/**
 * Example: Suppose we want to write a function that calculates the sum of all numbers from 1 up to (and including) some number n
 */

const { addUpTo_1 } = require("./add1");
const { addUpTo_2 } = require("./add2");

let t1 = performance.now();
addUpTo_1(10000000);
let t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);

t1 = performance.now();
addUpTo_2(10000000);
t2 = performance.now();
console.log(`Time elapsed: ${(t2 - t1) / 1000} seconds`);
