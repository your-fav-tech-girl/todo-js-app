import { createListItem } from "../src/utils/createLi.js";
import {
  saveTodoToLocalStorage,
  getTodosFromLocalStorage,
} from "../src/utils/saveTodos.js";

const todoForm = document.querySelector("#todoForm");
const todoList = document.querySelector("#todoList");

// named export
export function todoSubmitHandler(event) {
  event.preventDefault(); // Prevent the form from submitting
  // let form = event.target;
  // let todoValue = todoInput.value;

  let formData = new FormData(todoForm);
  let todoValue = formData.get("todo").trim();
  if (!todoValue) return;

  console.log(todoValue);

  // Save to local storage
  const newTodo = {
    id: Date.now(),
    text: todoValue,
    completed: false,
  };

  const todos = getTodosFromLocalStorage();
  // todos.push(todoValue);
  todos.push(newTodo);
  saveTodoToLocalStorage(todos);

  // Create a new list item and append it to the todo list
  const listItem = createListItem(newTodo);
  todoList.append(listItem);

  // Reset the form
  todoForm.reset();

  updateProgress(); // <-- Add this here

  console.log("Form submitted!");
  // You can perform validation or other actions here
}

// Function to load todos from local storage on page load
export function loadTodos(todoList) {
  console.log("Loading todos from localStorage..."); // ✅ Add this
  const todos = getTodosFromLocalStorage();
  console.log("Loaded todos:", todos); // ✅ Add this too
  todos.forEach((todo) => {
    console.log("Creating list item for:", todo); // Debug
    const listItem = createListItem(todo); // now todo is an object
    todoList.appendChild(listItem);
  });
}


// Function to update the progress of todos
// This function will count the number of completed,uncompleted todos and total todos
// and update the display accordingly.

function updateProgress() {
  const todo = document.querySelectorAll('.todo-item');
  const completed = document.querySelectorAll('.todo-item.completed');
  const uncompletedCount = todo.length - completed.length;

  document.getElementById('completedCount').textContent = completed.length;
  document.getElementById('uncompletedCount').textContent = uncompletedCount;
  document.getElementById('totalCount').textContent = todo.length;
}

 updateProgress();



// export const PI = 22 / 7;

