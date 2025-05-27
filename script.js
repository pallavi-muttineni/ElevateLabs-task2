document.addEventListener('DOMContentLoaded', () => {
    // Get references to DOM elements
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Function to add a new task
    function addTask() {
        const taskText = taskInput.value.trim(); // Get input value and remove leading/trailing whitespace

        if (taskText === '') {
            alert('Please enter a task!'); // Prevent adding empty tasks
            return;
        }

        // Create new list item (<li>) for the task
        const listItem = document.createElement('li');

        // Create a span for the task text (clickable for completion)
        const taskSpan = document.createElement('span');
        taskSpan.textContent = taskText;
        taskSpan.addEventListener('click', () => {
            listItem.classList.toggle('completed'); // Toggle the 'completed' class
        });

        // Create a div for action buttons (delete)
        const actionsDiv = document.createElement('div');
        actionsDiv.classList.add('actions');

        // Create a delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.classList.add('delete-btn');
        deleteBtn.addEventListener('click', () => {
            taskList.removeChild(listItem); // Remove the entire list item from the DOM
        });

        // Append the task span and delete button to the list item
        actionsDiv.appendChild(deleteBtn);
        listItem.appendChild(taskSpan);
        listItem.appendChild(actionsDiv);

        // Append the new list item to the task list
        taskList.appendChild(listItem);

        // Clear the input field after adding the task
        taskInput.value = '';
        taskInput.focus(); // Keep focus on the input for quick adding
    }

    // Event listener for the Add Task button
    addTaskBtn.addEventListener('click', addTask);

    // Event listener for pressing Enter key in the input field
    taskInput.addEventListener('keypress', (event) => {
        if (event.key === 'Enter') {
            addTask();
        }
    });
});