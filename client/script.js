// Get DOM HTML Elements
const container = document.getElementsByClassName("container");
const form = document.getElementsById("todoForm");
const list = document.getElementsById("todoList");


// Fetch all todos when page loads
async function fetchTodos() {
  const todos = router.get;
try {
    const response = await fetch(todos);
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
  const itemList = document.querySelector("#todoList");
        let listData = [];
        let listHTML = "";
        fetch("sever.js");

        }
// Handle form submission
todoForm.addEventListener("submit", async (e) => {
  // add your code
});

// Load todos when page loads
fetchTodos();
