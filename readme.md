# JavaScript Algorithms and Data Structures Course

# Sorting Algorithms

https://visualgo.net/

What is sorting?

- Sorting is the process of rearranging the items in a collection (e.g. an array) so that the items are in some kind of order

## Bubble Sort

The bubble sort is based on comparisons on each position of the array and its next, like arr[i] < arr[i+1], and swapping the numbers until no swaps happens.

## Selection Sort

Similar to Bubble sort, but insted of first placing large values into sorted position, it places small values into sorted position

## Insertion sort

It consists on going moving the numbers to the left making the left side of the array sorted,

| Algorithm | time complexity (best) | time complexity (average) | time complexity (worst) | spaace complexity |
| --------- | ---------------------- | ------------------------- | ----------------------- | ----------------- |
| Bubble    | O(n)                   | O(n^2)                    | O(n^2)                  | O(1)              |
| Insertion | O(n)                   | O(n^2)                    | O(n^2)                  | O(1)              |
| Selection | O(n^2)                 | O(n^2)                    | O(n^2)                  | O(1)              |

## Merging sort

It is consists on split the array in the smallest pieces [] or [x], then we need to merge each pair of those items using a method to merge sorted arrays.

| time complexity (best) | time complexity (average) | time complexity (worst) | spaace complexity |
| ---------------------- | ------------------------- | ----------------------- | ----------------- |
| O(n log n)             | O(n log n)                | O(n log n)              | O(n)              |
