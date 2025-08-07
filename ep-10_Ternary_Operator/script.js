let isRaining = false;
let result = isRaining ? "Take an umbrella" : "Enjoy th sunshine!";
console.log(result);

// 🧠 Using Ternary for Number Check
let num = 60;
let result1 = num % 2 == 0 ? "Even" : "Odd";
console.log(result1)

// ⚙️ Nested Ternary
let marke = 56;
let grade = marke >= 90 ? "A" :
            marke >= 80 ? "B" : 
            marke >= 70 ? "C" : 
            marke >= 60 ? "B" : "F"

console.log(grade);



// 💡 Real-World Use: Display Greeting
let hour = new Date().getHours();
let greeting = hour < 12 ? "Good Morning" : hour < 18 ? "Good Afternoon" : "Good Evening";
console.log(greeting);
