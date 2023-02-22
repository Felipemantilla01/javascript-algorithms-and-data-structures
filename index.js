// Counting down

// Without recursion
function countingDown(number) {
  for (let index = number; index > 0; index--) {
    console.log(index);
  }
  console.log("All done!");
}
countingDown(5);

// using recursion
function countingDown(number) {
  if (number > 0) {
    console.log(number);
    countingDown(number - 1);
  } else {
    console.log("All done!!");
  }
}

// factorial
function factorial(number) {
  if (number === 1) return 1;
  return number * factorial(number - 1);
}

console.log(factorial(3));
console.log(factorial(50));

// Helper method
// create a function to collect the odds values from one array of numbers

function collectOdds(arr) {
  let result = [];

  function helper(input) {
    if (input.length === 0) return 0;
    if (input[0] % 2 !== 0) {
      result.push(input[0]);
    }
    helper(input.slice(1));
  }
  helper(arr);

  return result;
}

console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));

// collect odds using pure recursion
// this mean without using nested functions or external objects to save the data
// using nested function is straightforward

function collectOdds(arr) {
  let newArr = [];
  if (arr.length === 0) {
    return newArr;
  }

  if (arr[0] % 2 !== 0) {
    newArr.push(arr[0]);
  }

  newArr = newArr.concat(collectOdds(arr.slice(1)));
  return newArr
}

console.log(collectOdds([1, 2, 3, 4, 5, 6, 7, 8, 9]));
