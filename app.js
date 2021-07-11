// selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

// Event Listeners
todoButton.addEventListener('click', addTodo);

// functions
function addTodo(event){
    // prevents page from reloading
    event.preventDefault();
    // Todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // create li
    const newTodo = document.createElement("li");
    newTodo.innerHTML= (todoInput.value);
    newTodo.classList.add("todo-item");
    newTodo.appendChild(newTodo);
}