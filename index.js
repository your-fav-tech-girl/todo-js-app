// named import
import { todoSubmitHandler, PI } from "./submitHandler.js";

console.log("Hello, JS-App 101-external");

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM contentloaded - external");
});

window.addEventListener("load", () => {
  console.log("Loading content - external");
});

console.log(document.title);

document.title = "JS APP 102 as defined AltSchool Student";

let h1 = document.querySelector(`[data-name="hOne"]`);

console.log(todoForm);

const todoInput = todoForm.querySelector("#todo");
const todosDisplay = document.querySelector("section.display-todos ol");
console.log(todosDisplay);

// do a querySelectorAll on all the spans inside the li and loop thru and attach an event to remove the parent(li)

todoForm.addEventListener("submit", todoSubmitHandler);

// other features to add to the todo app
// 1. create
// 2. update todo
// 3. delete todo(add a delete existing 3 todos)
// 4. complete checkbox
// 5. clear all
// 6. filter
