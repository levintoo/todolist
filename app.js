const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

todoButton.addEventListener('click', addTodo);

function addTodo(event) {

    // prevent form from submitting
    event.preventDefault();
// create div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

// create li
    const newTodo = document.createElement("li");

    newTodo.innerHTML= todoInput.value;
    
    newTodo.classList.add("todo-item");
    todoDiv.appendChild(newTodo);

    // create check mark button
    const completeButton = document.createElement('button');
    completeButton.innerHTML= '<i class="fas fa-check"></i>';
    completeButton.classList.add("complete-btn");
    todoDiv.appendChild(completeButton);

     // create thrash mark button
     const thrashButton = document.createElement('button');
     thrashButton.innerHTML= '<i class="fas fa-trash"></i>';
     thrashButton.classList.add("thrash-btn");
     todoDiv.appendChild(thrashButton);

     todoList.appendChild(todoDiv);
}