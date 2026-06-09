# LeetCode 2704: To Be Or Not To Be

## 📋 Problem Description

Write a function `expect` that helps developers test their code. It should take in any value `val` and return an object with the following two functions:

1. `toBe(val)` accepts another value and returns `true` if the two values `===` each other. If they are not equal, it should **throw an error** `"Not Equal"`.
2. `notToBe(val)` accepts another value and returns `true` if the two values `!==` each other. If they are equal, it should **throw an error** `"Equal"`.

### Examples

**Example 1:**

- **Input:** `func = () => expect(5).toBe(5)`
- **Output:** `{"value": true}`

**Example 2:**

- **Input:** `func = () => expect(5).toBe(null)`
- **Output:** `{"error": "Not Equal"}`

---

## 🏗️ Core Concepts Used

1. **Object Methods & Chaining:** The `expect` function returns an object containing functions as properties (`toBe` and `notToBe`). This allows developers to chain calls sequentially (e.g., `expect(val).toBe(otherVal)`).
2. **Lexical Closures:** The returned inner methods maintain a reference to the outer scope's `value` variable, retaining access to the baseline test parameter even after `expect` finishes execution.
3. **Intentional Error Propagation:** Rather than handling or catching exceptions internally, this solution deliberately utilizes the `throw new Error()` statement. This lets testing framework runners intercept the exception up the call stack to register assertions correctly.

---

## 🚀 Final Solution

```javascript
/**
 * @param {string} val
 * @return {Object}
 */
const expect = function (value) {
  return {
    toBe: (val1) => {
      if (val1 === value) {
        return true;
      } else {
        throw new Error("Not Equal");
      }
    },
    notToBe: (val2) => {
      if (val2 !== value) {
        return true;
      } else {
        throw new Error("Equal");
      }
    },
  };
};
```
