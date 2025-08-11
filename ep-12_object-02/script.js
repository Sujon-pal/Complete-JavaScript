
// Object.freeze() Example

const user = {
  name: "Sujon",
  age: 25
};

Object.freeze(user);

user.age = 30;           // ❌ Doesn't change
user.city = "Dhaka";     // ❌ Won't add
delete user.name;        // ❌ Won't delete

console.log(user); // { name: "Sujon", age: 25 }


// Object.seal() Example

const product = {
  name: "Laptop",
  price: 1000
};

Object.seal(product);

product.price = 1200;    // ✅ Allowed
product.brand = "HP";    // ❌ Not allowed
delete product.name;     // ❌ Not allowed

console.log(product); // { name: "Laptop", price: 1200 }