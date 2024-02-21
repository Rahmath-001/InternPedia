const newTodo = document.getElementById('new-todo');
const addButton = document.getElementById('add-button');
const todos = document.getElementById('todos');

addButton.addEventListener('click', function() {
    const todoText = newTodo.value.trim();

    if (todoText) {
        // Create a new to-do list item
        const todoItem = document.createElement('li');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        const label = document.createElement('label');
        label.textContent = todoText;
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';

        // Add event listeners to checkbox and delete button
        checkbox.addEventListener('change', function() {
            label.classList.toggle('completed');
        });
        deleteButton.addEventListener('click', function() {
            todos.removeChild(todoItem);
        });

        // Append elements to the to-do list item
        todoItem.appendChild(checkbox);
        todoItem.appendChild(label);
        todoItem.appendChild(deleteButton);

        // Add the to-do list item to the list
        todos.appendChild(todoItem);

        // Clear the input field
        newTodo.value = '';
    }
});
