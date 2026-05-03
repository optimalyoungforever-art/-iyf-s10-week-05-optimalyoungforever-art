const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

let todos = [];
let currentFilter = "all";

// CREATE ELEMENT
function createTodoElement(todo) {
    const li = document.createElement("li");
    li.dataset.id = todo.id;

    li.textContent = todo.text;

    if (todo.completed) {
        li.classList.add("completed");
    }

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "X";

    li.appendChild(deleteBtn);
    return li;
}

// RENDER
function renderTodos() {
    todoList.innerHTML = "";

    let filtered = todos;

    if (currentFilter === "active") {
        filtered = todos.filter(t => !t.completed);
    } else if (currentFilter === "completed") {
        filtered = todos.filter(t => t.completed);
    }

    filtered.forEach(todo => {
        todoList.appendChild(createTodoElement(todo));
    });

    updateStats();
}

// ADD
function addTodo(text) {
    todos.push({
        id: Date.now(),
        text,
        completed: false
    });

    renderTodos();
}

// TOGGLE
function toggleTodo(id) {
    todos = todos.map(todo =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );

    renderTodos();
}

// DELETE
function deleteTodo(id) {
    todos = todos.filter(todo => todo.id !== id);
    renderTodos();
}

// STATS
function updateStats() {
    const remaining = todos.filter(t => !t.completed).length;
    itemsLeft.textContent = `${remaining} items left`;
}

// FILTER
function setFilter(filter) {
    currentFilter = filter;
    renderTodos();
}

// EVENTS
form.addEventListener("submit", function (e) {
    e.preventDefault();

    const value = input.value.trim();
    if (!value) return;

    addTodo(value);
    input.value = "";
});

todoList.addEventListener("click", function (e) {
    const id = Number(e.target.parentElement.dataset.id);

    if (e.target.tagName === "BUTTON") {
        deleteTodo(id);
    } else {
        toggleTodo(id);
    }
});

filters.forEach(btn => {
    btn.addEventListener("click", () => {
        filters.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        setFilter(btn.dataset.filter);
    });
});

clearCompletedBtn.addEventListener("click", () => {
    todos = todos.filter(t => !t.completed);
    renderTodos();
});

// INIT
renderTodos();