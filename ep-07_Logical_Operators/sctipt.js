// ✅ 1. && (AND) Operator
let age = 20;
let hasID = true;

if (age >= 18 && hasID) {
  console.log("Allowed to enter");
} else {
  console.log("Not allowed");
}

// ✅ 2. || (OR) Operator
let isWeekend = true;
let isHoliday = false;

if (isWeekend || isHoliday) {
  console.log("No work today!");
} else {
  console.log("Go to work");
}

// ✅ 3. ! (NOT) Operator

let isRaining = false;

if (!isRaining) {
  console.log("Go for a walk");
} else {
  console.log("Stay inside");
}

// Example with &&:
false && console.log("Won’t run"); // Nothing happens

// Example with ||:
true || console.log("Won’t run"); // Nothing happens

let a = true;
let b = false;

console.log(a && b); // false
console.log(a || b); // true
console.log(!a); // false

const andResult = 0 && 2;
console.log(andResult);
const orResult = 0 || 2;
console.log(orResult);

const andResult1 = "Hi" && console.log("Hello1");
console.log(andResult1); // undefined

const orResult1 = "Hi" || console.log("Hello2");
console.log(orResult1); // Hi

const orResult2 = undefined || console.log("Hello3");
console.log(orResult2); //undefined
