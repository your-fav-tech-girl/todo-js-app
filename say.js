// 📁 sayHi.js
function sayHi(user) {
  alert(`Hello, ${user}!`);
}

function sayBye(user) {
  alert(`${user}, Bye!`);
}

export { sayHi, sayBye };

let name = "johne";
let age = 99;

// property value shorthand
export let person = {
  name,
  age,
};
