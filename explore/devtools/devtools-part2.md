# DevTools – Debugging

## Q1. What was the bug?

The bug was that the input values were being treated as strings instead of numbers, causing string concatenation instead of numerical addition.

---

## Q2. How would you fix it?

Convert the inputs to numbers before adding them.

Example:

```js
let result = Number(num1) + Number(num2);