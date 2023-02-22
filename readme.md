# JavaScript Algorithms and Data Structures Course

# Searching Algorithms 

 How do we search?
 - Given an array, the simplest way to search for a value is to look at every element in the array and check if it's the value we want.

There are many different search methods on arrays in JavaScript:
- indexOf
- find
- includes
- index

all of those are based on linear search 

## Linear Search
All the search methods of JavaScript do linear search, and the Big O notation, or code complexity of these methods are O(n)

## Binary Search
- Binary Search is much faster form of search 
- Rather than eliminating one element at a time, you can eliminate half of the remaining elements at a time 
- Binary search only works on `sorted` arrays 

The Big O of Binary Search is O(log n)