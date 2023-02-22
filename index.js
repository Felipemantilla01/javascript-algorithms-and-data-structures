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
    if(number === 1) return 1
    return number * factorial(number-1)
}

console.log(factorial(3))
console.log(factorial(50))