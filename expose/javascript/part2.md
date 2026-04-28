# Part 2 – A Little More of a Challenge

## Q1. What will happen at line 12 and why?

Output:
3

Explanation:
The variable `i` is declared with `var`, so it has function scope. After the loop finishes, `i` becomes 3 and is still accessible outside the loop.

---

## Q2. What will happen at line 13 and why?

Output:
150

Explanation:
`discountedPrice` is declared with `var`, so it is accessible outside the loop. The last computed value is 150.

---

## Q3. What will happen at line 14 and why?

Output:
150

Explanation:
`finalPrice` is declared with `var`, so it is accessible after the loop. The last value assigned is 150.

---

## Q4. What will this function return?

Output:
[50, 100, 150]

Explanation:
Each price is multiplied by 0.5 and pushed into the array.

---

## Q5. What will happen at line 12 and why?

Output:
ReferenceError: i is not defined

Explanation:
`i` is declared with `let`, so it is block-scoped and not accessible outside the loop.

---

## Q6. What will happen at line 13 and why?

Output:
ReferenceError: discountedPrice is not defined

Explanation:
`discountedPrice` is declared with `let`, so it is only accessible inside the loop.

---

## Q7. What will happen at line 14 and why?

Output:
150

Explanation:
`finalPrice` is declared outside the loop, so it remains accessible.

---

## Q8. What will this function return?

Output:
[50, 100, 150]

Explanation:
Same logic as before; using `let` does not change the result.

---

## Q9. What will happen at line 11 and why?

Output:
ReferenceError: i is not defined

Explanation:
`i` is declared with `let` in the loop, so it cannot be accessed outside.

---

## Q10. What will happen at line 12 and why?

Output:
3

Explanation:
`length` is declared with `const` and equals prices.length, which is 3.

---

## Q11. What will this function return?

Output:
[50, 100, 150]

Explanation:
The array is filled with discounted prices. `const` prevents reassignment, but allows modifying array contents.

---

# Data Types

## Object Notation

A. student.name  
B. student["Grad Year"]  
C. student.greeting()  
D. student["Favorite Teacher"].name  
E. student.courseLoad[0]  

---

# Basic Operators & Type Conversion

## Arithmetic

'3' + 2 → '32'  
'3' - 2 → 1  
3 + null → 3  
'3' + null → '3null'  
true + 3 → 4  
false + null → 0  
'3' + undefined → '3undefined'  
'3' - undefined → NaN  

---

## Comparison

'2' > 1 → true  
'2' < '12' → false  
2 == '2' → true  
2 === '2' → false  
true == 2 → false  
true === Boolean(2) → true  

---

## Difference between == and ===

`==` allows type conversion before comparison.  
`===` requires both value and type to match.

---

# Functions

## Q17

Output:
[2, 4, 6]

Explanation:
Each number is doubled using the callback function.

---

# setTimeout / setInterval

## Q19

Output:
1  
4  
3  
2  

Explanation:
Synchronous code runs first (1, 4), then setTimeout with 0 delay (3), then the delayed one (2).
