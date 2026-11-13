// 1. Assignment operators
let a = 20, b = 10, x;
//Addition:
x = a; x += b;  console.log(x); // 30
//Subtraction:
x = a; x -= b;  console.log(x); // 10
//Multiplication:
x = a; x *= b;  console.log(x); // 200
//Division:
x = a; x /= b;  console.log(x); // 2
//Exponentiation:
x = a; x **= b; console.log(x); // 10240000000000
//Modulus:
x = a; x %= b;  console.log(x); // 0

// 2. Comparison
console.log(25 > 15); // true

// 3. Loose  
console.log(50 == "50");  // true 
// strict equality
console.log(50 === "50"); // false 

// 4. Not equal
console.log(100 != 200);  // true
console.log(100 !== 200); // true

// 5. Age check
let age = 23;
console.log(age >= 18); // true

// 6. AND
console.log(20 > 10 && 20 < 40); // true

// 7. OR
console.log(10 > 20 || 40 > 20); // true

// 8. NOT
console.log(!(200 > 100)); // false

// 9. Three ANDs
console.log(3 > 1 && 10 > 5 && 20 > 10 && 30 > 20); // true

// 10. AND, OR, NOT combined
let hasID = true, isBanned = false;
console.log((age >= 18 && hasID) || !isBanned); // true 
//age >= 18 - 23 >= 18 - true
//age >= 18 && hasID - true && true - true
//!isBanned - !false - true
//true || true - true

// 11. Ternary: positive or negative
let num = 10;
console.log(num >= 0 ? "Positive" : "Negative"); // Positive

// 12. Ternary: login
let isLoggedIn = true;
console.log(isLoggedIn ? "My Car world" : "Please Login"); // My Car world 

// 13. Concatenation
let firstName = "Hari", lastName = "Haran";
console.log(firstName + " " + lastName); // Hari Haran
console.log(firstName + "" + lastName); // HariHaran

// 14. Template string
let name = "Hari", userAge = 23, city = "Salem";
console.log(`Name: ${name}, Age: ${userAge}, City: ${city}`); // Name: Hari, Age: 23, City: Salem

// 15. typeof string + number
console.log(typeof ("JavaScript" + 100)); // string  ("JavaScript100")

// 16. typeof number + boolean
console.log(typeof (23 + true)); // number  (23+1 = 24)

// 17. Number() and add
console.log(Number("25") + 50); // 75

// 18. Number() conversions
console.log(Number("143")); // 143
console.log(Number("Stackly")); // NaN
console.log(Number(true));  // 1
console.log(Number(false)); // 0
console.log(Number(null));  // 0

// 19. Boolean() conversions
console.log(Boolean(""));        // false
console.log(Boolean("Welcome"));   // true
console.log(Boolean(0));         // false
console.log(Boolean(1));         // true
console.log(Boolean(undefined)); // false
console.log(Boolean(null));      // false

// 20. Price conversion
let price = "200";
price = Number(price);
console.log(price + 100); // 300