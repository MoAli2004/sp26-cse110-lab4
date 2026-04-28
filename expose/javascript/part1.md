# Part 1 – Variables & Scoping

## Q1. What is printed by line 9?

Output:
values added: 20

Explanation:
The variable `result` is declared using `var`, which has function scope. Inside the if block, `result` is set to `num1 + num2 = 20`, so line 9 prints "values added: 20".

---

## Q2. What is printed by line 13?

Output:
final result: 20

Explanation:
Because `var` is function-scoped, the variable `result` is accessible outside the if block. Therefore, line 13 can access it and prints "final result: 20".

---

## Q3. Why should you not use var?

Explanation:
The `var` keyword has function scope instead of block scope, meaning variables can be accessed outside the block they are declared in. This can lead to unintended behavior, bugs, and naming conflicts. Modern JavaScript prefers `let` and `const` because they are block-scoped and safer to use.

---

## Q4. What is printed by line 9? (let version)

Output:
values added: 20

Explanation:
The variable `result` is declared using `let`, which is block-scoped. Inside the if block, `result` is set to 20, so line 9 correctly prints "values added: 20".

---

## Q5. What is printed by line 13? (let version)

Output:
ReferenceError: result is not defined

Explanation:
The variable `result` is declared with `let`, so it only exists inside the if block. Line 13 is outside the block, so it cannot access `result`, causing a ReferenceError.

---

## Q6. What is printed by line 9? (const version)

Output:
TypeError: Assignment to constant variable.

Explanation:
The variable `result` is declared with `const`, so it cannot be reassigned. The line `result = num1 + num2` attempts to change its value, causing a TypeError before line 9 executes.

---

## Q7. What is printed by line 13? (const version)

Output:
Nothing is printed because the program crashes earlier.

Explanation:
The error occurs when trying to reassign a `const` variable, so execution stops before reaching line 13.
