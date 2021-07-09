const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');
const filterOption = document.querySelector('#filter-todo');

todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);

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

    //  clear todo input
    todoInput.value = "";
}

function deleteCheck(e) {
    const item = e.target;

    if (item.classList[0] === 'thrash-btn'){
        const todo = item.parentElement;
        todo.classList.add("fall");
        
        todo.addEventListener('transitionend', function(){
        todo.remove();
        });
        
        
    }
    if (item.classList[0] === 'complete-btn'){
        const todo = item.parentElement;

        todo.classList.toggle("completed");
    }
}
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo){

    });
}
