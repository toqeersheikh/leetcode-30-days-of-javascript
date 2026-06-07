# LeetCode 2620: Counter

## 📋 Problem Description

Given an integer `n`, return a **counter** function. This counter function initially returns `n` and then returns `1` more than the previous value every subsequent time it is called (`n`, `n + 1`, `n + 2`, etc.).

### Examples

**Example 1:**

- **Input:** `n = 10`, `["call","call","call"]`
- **Output:** `[10,11,12]`
- **Explanation:** - `counter() = 10` (The first time counter() is called, it returns `n`)
  - `counter() = 11` (Returns 1 more than the previous time)
  - `counter() = 12` (Returns 1 more than the previous time)

**Example 2:**

- **Input:** `n = -2`, `["call","call","call","call","call"]`
- **Output:** `[-2,-1,0,1,2]`

### Constraints

- `-1000 <= n <= 1000`
- `0 <= calls.length <= 1000`
- `calls[i] === "call"`

---

## 🏗️ Core Concepts Used

To solve this problem from first principles, we leverage three fundamental JavaScript engine behaviors:

1. **High-Order Functions (First-Class Citizens):** Functions in JavaScript can be treated like any regular data type. We can pass them around, assign them to variables, and return an inner function from inside an outer function.
2. **Lexical Scoping & Closures:** When an inner function is defined, it permanently retains access to the variable environment of its birthplace (the parent scope). Even after the parent function (`createCounter`) finishes executing and pops off the Call Stack, the inner function carries these variables around in a private memory "backpack".
3. **Post-Increment Operator Mechanics (`n++`):** The post-increment operator evaluates/returns the current value of the operand _first_, and _then_ increments the value by 1 in memory immediately afterward.

---

## 💡 The Approach

When a problem requires a function to maintain and update an internal state across separate, sequential invocations without polluting the global scope, a **closure** is the ideal architectural pattern.

1. **State Isolation:** The parameter `n` belongs to the outer function block. By referencing `n` inside our returned inner function, we automatically create a closure around it. `n` becomes a private state tracking variable that cannot be accessed or manipulated by external scripts.
2. **Timing the Return vs. Mutation:** The main structural challenge is returning the _current_ value while updating it for the _next_ call. Using a temporary tracking variable is a valid first approach, but utilizing the native post-increment operator (`n++`) allows us to yield the current value and execute the memory update in a single step.

---

## 🚀 Optimized Solution

By combining an arrow function with the post-increment operator, we can condense the entire runtime logic into an elegant, single-line return block:

```javascript
/**
 * @param {number} n
 * @return {Function} counter
 */
const createCounter = (n) => {
  // The inner function closes over 'n', turning it into a private state tracker
  return () => n++;
};
```
