// ✅ Primitive data types

// Number: any number (whole or decimal)
let age = 25;
console.log(typeof age); // "number"

// BigInt: very large numbers
let bigNum = 12345678901234567890n;
console.log(typeof bigNum); // "bigint"

// String: text
let name = "Alice";
console.log(typeof name); // "string"

// Boolean: true or false
let isStudent = true;
console.log(typeof isStudent); // "boolean"

// Undefined: declared but not assigned
let notGiven;
console.log(typeof notGiven); // "undefined"

// Null: empty / no value
let empty = null;
console.log(typeof empty); // "object" (a known quirk)

// Symbol: unique value
let id = Symbol("id");
console.log(typeof id); // "symbol"



// ✅ Non-primitive data types

// Object: collection of key-value pairs
let person = { name: "Alice", age: 25 };
console.log(typeof person); // "object"

// Array: list of items (special object)
let numbers = [1, 2, 3];
console.log(typeof numbers); // "object"
console.log(Array.isArray(numbers)); // true

// Function: block of code we can call
function sayHello() {
  console.log("Hello!");
}
console.log(typeof sayHello); // "function"

// Other built-in objects (example)
let today = new Date();
console.log(today); // shows current date and time



// ✅ Extra: checking type with instanceof
console.log(person instanceof Object); // true
console.log(numbers instanceof Array); // true
console.log(sayHello instanceof Function); // true



// 🔰 Data Type Conversion


//  Number to String
let num = 123;
let str1 = String(num);        // "123"
let str2 = num.toString();     // "123"
console.log(typeof str1);      // "string"

//  String to Number
let str = "456";
let num1 = Number(str);        // 456
let num2 = parseInt(str);      // 456
let num3 = +str;               // 456 (shortcut)
console.log(typeof num1);      // "number"

//  Boolean to String
let bool = true;
let strBool = String(bool);    // "true"
console.log(typeof strBool);   // "string"

//  String to Boolean
let strYes = "hello";
let boolYes = Boolean(strYes); // true (any non-empty string is true)
let emptyStr = "";
let boolNo = Boolean(emptyStr);// false
console.log(boolYes, boolNo);

//  Number to Boolean
let zero = 0;
let zeroBool = Boolean(zero);  // false
let someNum = 5;
let someNumBool = Boolean(someNum); // true
console.log(zeroBool, someNumBool);

//  Boolean to Number
let t = true;
let f = false;
console.log(Number(t));        // 1
console.log(Number(f));        // 0)

//  Object to String
let obj = { name: "Alice" };
let objStr = JSON.stringify(obj); // '{"name":"Alice"}'
console.log(objStr);

//  Array to String
let arr = [1, 2, 3];
let arrStr = arr.toString();   // "1,2,3"
console.log(arrStr);

//  String to Array (split)
let text = "apple,banana,orange";
let fruits = text.split(",");  // ["apple", "banana", "orange"]
console.log(fruits);


// ✨ Tips to remember:

// String(value) → converts anything to string.

// Number(value) → converts string, boolean, etc. to number.

// Boolean(value) → converts to true/false.

// JSON.stringify(obj) → object to JSON string.

// "text".split(",") → string to array.