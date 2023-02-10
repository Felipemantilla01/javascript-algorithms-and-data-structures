# Big O Notation

It is used to mesure the performance of the code.

Big O Notation is a way to formalize fuzzy counting

It allows us to talk formally about how the runtime of an algorithm grows as the inputs grow

We need to define the behavior of the runtime

```
O(f(n))
where:
f(n) = fn(1) = constant
f(n) = fn(n) = linear
f(n) = fn(n^2) = quadratic
```

# What does better mean?

- faster?
- less memory-intesive?
- more readable?

# counting operations

Check how many simple operations should be execute the machine

Pretty cool tool to understand the concept
https://rithmschool.github.io/function-timer-demo/

# simplifying big o Expressions

```
O(2n) => O(n)
O(500) => 0(1)
O(13n^2 + 3n + 10) => 0(n^2)
...
and so on
```

## Big O ShortHands

1. Arithmetic op are constant
2. Variable assigments is constant
3. accessing elements in an array (by index) or object (by key) is constant
4. in a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop
