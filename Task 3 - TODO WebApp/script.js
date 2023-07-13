const taskInput = document.getElementById('task');
const addTaskBtn = document.getElementById('add-task');
const pendingList = document.getElementById('pending-list');
const completedList = document.getElementById('completed-list');

// Add event listener to add task button
addTaskBtn.addEventListener('click', addTask);

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    if (taskText !== '') {
        const taskItem = createTaskItem(taskText);

        // Append task item to pending list
        pendingList.appendChild(taskItem);

        // Clear input field
        taskInput.value = '';
    }
}

// Function to create a task item
function createTaskItem(taskText) {
    const taskItem = document.createElement('li');
    taskItem.className = 'task-item';
    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.className = 'dBtn';
    deleteButton.addEventListener('click', deleteTask);

    const completeButton = document.createElement('button');
    completeButton.innerText = 'Complete';
    completeButton.className = 'cBtn';
    completeButton.addEventListener('click', completeTask);

    const taskInfo = document.createElement('span');
    taskInfo.innerText = taskText;

    const timestamp = document.createElement('span');
    timestamp.innerText = getCurrentTimestamp();
    timestamp.className = 'timestamp';

    taskItem.appendChild(taskInfo);
    taskItem.appendChild(timestamp);
    taskItem.appendChild(deleteButton);
    taskItem.appendChild(completeButton);

    return taskItem;
}

// Function to delete a task
function deleteTask(e) {
    const taskItem = e.target.parentNode;
    taskItem.remove();
}

// Function to mark a task as complete
function completeTask(e) {
    const taskItem = e.target.parentNode;
    taskItem.classList.add('completed');
    taskItem.removeChild(e.target);
    completedList.appendChild(taskItem);
}

// Function to get current timestamp
function getCurrentTimestamp() {
    const now = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric' };
    return now.toLocaleDateString('en-US', options);
}
