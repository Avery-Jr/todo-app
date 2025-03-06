// Get DOM HTML Elements
const container = document.getElementsByClassName("container");
const form = document.getElementsById("todoForm");
const list = document.getElementsById("todoList");


// Fetch all todos when page loads
async function fetchTodos() {
  const api = app.use("/api", todoRouter);
 let todos = fetch(api);

}

// Display todos in the list
function displayTodos(todos) {
  // add your code
}

// Handle form submission
todoForm.addEventListener("submit", async (e) => {
  // add your code
});

// Load todos when page loads
fetchTodos();
