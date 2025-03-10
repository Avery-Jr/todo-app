// Get DOM HTML Elements
const form = document.getElementsById("todoForm");
const list = document.getElementsById("todoList");
const input = document.getElementsById("todoInput");

// Fetch all todos when page loads
async function fetchTodos() {
const url = "api/todos";
try {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Response status: ${response.status}`);
  }

  const json = await response.json();
  console.log(json);
} catch (error) {
  console.error(error.message);
}
}

// Display todos in the list
function displayTodos(todos) {
fetch('api/todos');
then((response) => response.json())
          .then((data) => {
            todosData = data.todos;
            data.todos.forEach((product) => {
              productHTML += `<li></li>`;
            });
          });
}

// Handle form submission
todoForm.addEventListener("submit", async (e) => {
 const request1 = new Request('api/todos', {
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
