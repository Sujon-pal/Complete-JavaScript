

const userAge1 = '34';
const userAge2 = 31;

console.log(typeof(userAge1)); // string
console.log(typeof(userAge2));  // number


console.log(userAge1 == userAge2) // true
console.log(userAge1 === userAge2) // false
console.log(parseInt(userAge1) === userAge2) // true


console.log(userAge1 != userAge2); // false
console.log(userAge1 !== userAge2); // true

console.log(userAge1 > userAge2); // true
console.log(userAge1 < userAge2); //false

console.log(10 >= 10);  // true
console.log(12 >= 9);   // true

console.log(5 <= 5);    // true
console.log(3 <= 7);    // true


console.log("abc" > userAge2) //false


