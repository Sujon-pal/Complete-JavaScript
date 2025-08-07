// Creating Objects
let userInfo = {
  name: "Sujon",
  age: 24,
  country: "Bangladesh",
  city: "Sylhet",
};

console.log(userInfo);
console.log(userInfo.name); // Dot notation
console.log(userInfo["age"]); // Bracket notation

// Adding / Updating / Deleting Properties
const person = {
  name: "Sujon",
  age: 25,
  isStudent: true,
};
console.log(person);

person.email = "Sujon@gmail.com"; // Adding
person.name = "Sujon Pal"; // Updating
delete person.isStudent; // Deleting
console.log(person);



// Nested Objects
const student = {
  name : 'Sujon Pal',
  age : 24,
  address :{
    country:'Bangladesh',
    city:'Sylhet'
  }
}


student.address.houseNo = 344
console.log(student.address);


