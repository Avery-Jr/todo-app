// Get DOM HTML Elements
const form = document.getElementById("todoForm");
const list = document.getElementById("todoList");
const input = document.getElementById("todoInput");

// Fetch all todos when page loads
async function fetchTodos() {
const url = "/api/todos";
try {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }
  const todos = await response.json();
  console.log(todos);
  displayTodos(todos);
} catch (error) {
  console.error(error.message);
}
}

// Display todos in the list
function displayTodos(todos) {
response => response.json().then((data) => {
    todosData = data.todos;
    data.todos.forEach((product) => {
      productHTML += `<li></li>`;
    });
  });
}

// Handle form submission
todoForm.addEventListener("submit", async (e) => {
 const request1 = new Request('/api/todos', {
   method: "POST",
   body: JSON.stringify({ username: "example" }),
 });

 const request2 = request1.clone();

 const response1 = await fetch(request1);
 console.log(response1.status);

 const response2 = await fetch(request2);
 console.log(response2.status);

});

// Load todos when page loads
fetchTodos();
