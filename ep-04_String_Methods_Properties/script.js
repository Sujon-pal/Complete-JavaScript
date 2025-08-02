// 📝 JavaScript String Methods & Properties – Complete Demo

let text = "  Hello World! , nice to meet you ";
console.log("Original text:", `"${text}"`);

// 📏 Property
console.log("length:", text.length); // 15

// 🔧 Methods WITHOUT arguments
console.log("toUpperCase():", text.toUpperCase()); // "  HELLO WORLD!  "
console.log("toLowerCase():", text.toLowerCase()); // "  hello world!  "
console.log("trim():", `"${text.trim()}"`); // "Hello World!"
console.log("trimStart():", `"${text.trimStart()}"`); // "Hello World!  "
console.log("trimEnd():", `"${text.trimEnd()}"`); // "  Hello World!"

let repeated = "Ha!".repeat(3);
console.log("repeat(3):", repeated); // "Ha!Ha!Ha!"

// 🛠 Methods WITH arguments
console.log("includes('World'):", text.includes("World")); // true
console.log("indexOf('World'):", text.indexOf("W")); // 8
console.log("startsWith('  He'):", text.startsWith("  He")); // true
console.log("endsWith('!  '):", text.endsWith("!  ")); // true
console.log("replace('World', 'Everyone'):", text.replace("World", "Everyone")); // "  Hello Everyone!  "
console.log("replaceAll('l', '*'):", text.replaceAll("l", "*")); // "  He**o Wor*d!  "

let text2 = "Nice";
console.log("concat():", text.concat(" and ", text2)); // "  Hello World!   and Nice"

const lastFourDigits = "7890";
console.log(lastFourDigits.padStart(10, "*"));
console.log(lastFourDigits.padEnd(10, "*"));


const char = 'Hello Developer ! I Am Sujon Pal'
console.log(char.charAt(7))
console.log(char.indexOf('D'));
console.log(char.charCodeAt(6))






