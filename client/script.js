// Get DOM HTML Elements
const container = document.getElementsByClassName("container");
const form = document.getElementsById("todoForm");
const list = document.getElementsById("todoList");


// Fetch all todos when page loads
async function fetchTodos() {
const params = new URLSearchParams();
params.append("text");

// GET request sent to https://example.org/login?username=example
const response = await fetch(`res.json(todos)${params}`);
 method: "POST",
  body = JSON.stringify({ username: "example" });
}

// Display todos in the list
function displayTodos(todos) {
        let listData = [];
        let listHTML = "";
        fetch("todos.js");

        }
// Handle form submission
todoForm.addEventListener("submit", async (e) => {
  // add your code
});

// Load todos when page loads
fetchTodos();
