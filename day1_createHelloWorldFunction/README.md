# 🚀 LeetCode Day 1: Create Hello World Function

Welcome to Day 1 of the LeetCode JavaScript challenge! This document outlines the solution for the **"Create Hello World Function"** problem and breaks down the core JavaScript mechanics that make it possible.

## 📝 Problem Statement

Write a function `createHelloWorld`. It should return a new function that always returns the string `"Hello World"`.

### Examples

```javascript
// Example 1
const f = createHelloWorld();
f(); // Returns: "Hello World"
```

# Explanation of Solution:

# Higher-Order Functions in JavaScript

To solve this problem, we must understand how functions work under the hood in JavaScript.

In JavaScript, functions are **First-Class Citizens**, meaning they can be treated like any other variable. They can be passed around, assigned to variables, and returned from other functions.

---

## Higher-Order Function

A **Higher-Order Function** is a function that does at least one of the following:

- Takes one or more functions as arguments (inputs)
- Returns a function as its result (output)

---

## 1. Taking a Function as an Argument (Callbacks)

When you pass a function into a higher-order function, the passed-in function is called a **callback function**.

This is widely used in array methods like:

- `.map()`
- `.filter()`
- `.forEach()`

---

## 2. Returning a Function

A higher-order function can also generate and return a brand-new function.

This is useful for creating reusable configuration logic and leverages the concept of **closures**.

---

## Breakdown of the Code

- **createHelloWorld**
  This is the higher-order outer function. When executed, it returns an anonymous inner function instead of returning `"Hello World"` directly.

- **...args**
  The rest parameter syntax allows the returned function to accept an infinite number of arguments (like `{}`, `null`, `42`).

- **Return Value**
  No matter what values are passed into the inner function, it always returns `"Hello World"`.

---

## 🎯 Key Takeaways

- **Functions as Data**
  JavaScript functions can be returned from other functions just like numbers, strings, or objects.

- **Closures**
  Even after `createHelloWorld()` finishes execution, the inner function retains its structure and execution capability.

- **Argument Flexibility**
  Rest syntax (`...args`) ensures the inner function can handle extra or unexpected parameters.
