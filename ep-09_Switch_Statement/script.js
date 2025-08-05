// 🧾 Syntax
// switch (expression) {
//   case value1:
//     // code block
//     break;
//   case value2:
//     // code block
//     break;
//   default:
//   // default code block
// }


// ✅ Example 1: Simple Day Checker

const day = 1;
let dayName = "";

switch (day) {
  case 1:
    dayName = "Sunday";
    break;
  case 2:
    dayName = "Monday";
    break;
  case 3:
    dayName = "Tuesday";
    break;
  case 4:
    dayName = "Wednesday";
    break;
  case 5:
    dayName = "Thursday";
    break;
  case 6:
    dayName = "Friday";
    break;
  case 7:
    dayName = "Saturday";
    break;
  default:
    dayName = "Invalid day"
}

console.log('Today is ' + dayName);


// ✅ Example 2: Calculator

let x = 3 , y = 4, operator = '/';
let result;

switch (operator) {
  case '+':
    result = x + y
    break;
  case '-' :
    result = x - y
    break
  case '*':
    result = x * y
    break
  case '/':
    result = x / y;
    break

  default:
    result = "invalid Operator"
    break;
}

console.log('Result is '+ result);
