// ADD 1
module.exports = {
  addUpTo_1(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
      total += i;
    }
    return total;
  },
};

/**
 * Here the number of operations depends of 'n'
 * so we have n assigments, and n additions, and n comparisions, and ....
 * Counting operations is hard, but always be proportional to n
 */
