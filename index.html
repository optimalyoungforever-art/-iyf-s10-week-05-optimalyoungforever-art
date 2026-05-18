<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>To-Do List</title>
    <style>
        :root {
            --bg-gradient: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            --card-bg: #ffffff;
            --text-main: #333333;
            --text-muted: #777777;
            --accent: #667eea;
            --accent-hover: #5a6fd6;
            --border: #e0e0e0;
            --danger: #ff4d4d;
            --success: #28a745;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background: var(--bg-gradient);
            min-height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            margin: 0;
            padding: 20px;
            box-sizing: border-box;
        }

        .container {
            background: var(--card-bg);
            width: 100%;
            max-width: 500px;
            padding: 30px;
            border-radius: 12px;
            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
        }

        h1 {
            margin-top: 0;
            color: var(--text-main);
            text-align: center;
            font-size: 2rem;
            margin-bottom: 25px;
        }

        #todo-form {
            display: flex;
            gap: 10px;
            margin-bottom: 20px;
        }

        #todo-input {
            flex: 1;
            padding: 12px 15px;
            border: 2px solid var(--border);
            border-radius: 6px;
            font-size: 1rem;
            outline: none;
            transition: border-color 0.2s;
        }

        #todo-input:focus {
            border-color: var(--accent);
        }

        button {
            padding: 12px 20px;
            border: none;
            background-color: var(--accent);
            color: white;
            border-radius: 6px;
            font-size: 1rem;
            cursor: pointer;
            font-weight: 600;
            transition: background-color 0.2s;
        }

        button:hover {
            background-color: var(--accent-hover);
        }

        .filters {
            display: flex;
            justify-content: center;
            gap: 10px;
            margin-bottom: 20px;
            border-bottom: 1px solid var(--border);
            padding-bottom: 15px;
        }

        .filter {
            background: none;
            color: var(--text-muted);
            padding: 6px 12px;
            font-size: 0.9rem;
            border-radius: 4px;
        }

        .filter:hover {
            background: #f0f2f5;
            color: var(--text-main);
        }

        .filter.active {
            background-color: var(--accent);
            color: white;
        }

        #todo-list {
            list-style: none;
            padding: 0;
            margin: 0;
            max-height: 320px;
            overflow-y: auto;
        }

        #todo-list li {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 10px;
            border-bottom: 1px solid var(--border);
            transition: opacity 0.2s, background-color 0.2s;
        }

        #todo-list li:hover {
            background-color: #fafafa;
        }

        .todo-content {
            display: flex;
            align-items: center;
            gap: 10px;
            cursor: pointer;
            flex: 1;
        }

        .todo-checkbox {
            width: 18px;
            height: 18px;
            cursor: pointer;
        }

        .todo-text {
            color: var(--text-main);
            font-size: 1.05rem;
            word-break: break-all;
        }

        #todo-list li.completed .todo-text {
            text-decoration: line-through;
            color: var(--text-muted);
        }

        .delete-btn {
            background: none;
            color: var(--text-muted);
            padding: 5px 8px;
            font-size: 0.9rem;
            border-radius: 4px;
        }

        .delete-btn:hover {
            background-color: #ffe6e6;
            color: var(--danger);
        }

        .stats {
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-top: 20px;
            padding-top: 15px;
            border-top: 1px solid var(--border);
            color: var(--text-muted);
            font-size: 0.9rem;
        }

        #clear-completed {
            background: none;
            color: var(--text-muted);
            padding: 5px 10px;
            font-size: 0.9rem;
            font-weight: normal;
        }

        #clear-completed:hover {
            background-color: #f0f2f5;
            color: var(--text-main);
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>My To-Do List</h1>

        <form id="todo-form">
            <input type="text" id="todo-input" placeholder="What needs to be done?" required autocomplete="off">
            <button type="submit">Add</button>
        </form>

        <div class="filters">
            <button class="filter active" data-filter="all">All</button>
            <button class="filter" data-filter="active">Active</button>
            <button class="filter" data-filter="completed">Completed</button>
        </div>

        <ul id="todo-list"></ul>

        <div class="stats">
            <span id="items-left">0 items left</span>
            <button id="clear-completed">Clear Completed</button>
        </div>
    </div>

    <script>
        document.addEventListener("DOMContentLoaded", () => {
            // --- DOM SELECTION ---
            const todoForm = document.getElementById("todo-form");
            const todoInput = document.getElementById("todo-input");
            const todoList = document.getElementById("todo-list");
            const itemsLeftSpan = document.getElementById("items-left");
            const clearCompletedBtn = document.getElementById("clear-completed");
            const filterButtons = document.querySelectorAll(".filter");

            let currentFilter = "all";

            // --- FORM HANDLING & CREATION ---
            todoForm.addEventListener("submit", (event) => {
                event.preventDefault(); // Stop page refresh

                const taskText = todoInput.value.trim();
                if (taskText === "") return;

                createTodoElement(taskText);
                todoInput.value = ""; // Clear input
                updateStats();
                applyFilter();
            });

            function createTodoElement(text) {
                // Create item layout node structure
                const li = document.createElement("li");
                
                const contentDiv = document.createElement("div");
                contentDiv.className = "todo-content";

                const checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.className = "todo-checkbox";

                const span = document.createElement("span");
                span.className = "todo-text";
                span.textContent = text;

                const deleteBtn = document.createElement("button");
                deleteBtn.className = "delete-btn";
                deleteBtn.textContent = "Delete";

                // Assemble nodes
                contentDiv.append(checkbox, span);
                li.append(contentDiv, deleteBtn);
                todoList.appendChild(li);
            }

            // --- EVENT DELEGATION (LIST CONTROL) ---
            todoList.addEventListener("click", (event) => {
                const target = event.target;
                const li = target.closest("li");
                if (!li) return;

                // Toggle logic if clicking checkbox or wrapper content box
                if (target.classList.contains("todo-checkbox") || target.closest(".todo-content")) {
                    const checkbox = li.querySelector(".todo-checkbox");
                    
                    // Synchronize checkbox state if wrapper text was target click
                    if (!target.classList.contains("todo-checkbox")) {
                        checkbox.checked = !checkbox.checked;
                    }

                    li.classList.toggle("completed", checkbox.checked);
                    updateStats();
                    applyFilter();
                }

                // Delete processing logic
                if (target.classList.contains("delete-btn")) {
                    event.stopPropagation(); // Stop propagation tree bubbling
                    li.remove();
                    updateStats();
                }
            });

            // --- FILTERS FUNCTIONALITY ---
            filterButtons.forEach(button => {
                button.addEventListener("click", (event) => {
                    // Update layout menu view classes
                    filterButtons.forEach(btn => btn.classList.remove("active"));
                    event.target.classList.add("active");

                    currentFilter = event.target.getAttribute("data-filter");
                    applyFilter();
                });
            });

            function applyFilter() {
                const items = todoList.children; // Live HTMLCollection selection 

                for (let item of items) {
                    const isCompleted = item.classList.contains("completed");

                    switch (currentFilter) {
                        case "all":
                            item.style.display = "flex";
                            break;
                        case "active":
                            item.style.display = isCompleted ? "none" : "flex";
                            break;
                        case "completed":
                            item.style.display = isCompleted ? "flex" : "none";
                            break;
                    }
                }
            }

            // --- CLEAR COMPLETED ELEMENTS ---
            clearCompletedBtn.addEventListener("click", () => {
                // Query complete state list items
                const completedItems = todoList.querySelectorAll("li.completed");
                completedItems.forEach(item => item.remove());
                updateStats();
            });

            // --- CALCULATE ITEMS LEFT ---
            function updateStats() {
                const totalItems = todoList.children.length;
                const completedItems = todoList.querySelectorAll("li.completed").length;
                const activeCount = totalItems - completedItems;

                itemsLeftSpan.textContent = `${activeCount} item${activeCount === 1 ? '' : 's'} left`;
            }

            // Keyboard Accessibility Shortcut (Escape clears input)
            document.addEventListener("keydown", (event) => {
                if (event.key === "Escape") {
                    todoInput.value = "";
                }
            });
        });
    </script>
</body>
</html>
