const taskList = document.querySelector("#task-list");

function createTaskElement(task) {
  const li = document.createElement("li");

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.checked = task.completed;
  checkbox.addEventListener("change", () => {
    task.completed = checkbox.checked;
    saveTasks();
  });
  li.appendChild(checkbox);

  const span = document.createElement("span");
  span.textContent = task.description;
  span.contentEditable = true;
  span.addEventListener("blur", () => {
    task.description = span.textContent;
    saveTasks();
  });
  li.appendChild(span);

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", () => {
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    saveTasks();
    li.remove();
  });
  li.appendChild(deleteButton);

  return li;
}

function renderTasks() {
  taskList.innerHTML = "";
  tasks.forEach(task => {
    const taskElement = createTaskElement(task);
    taskList.appendChild(taskElement);
  });
}

function addTask() {
  const taskDescription = document.querySelector("#task-input").value;
  const task = {
    description: taskDescription,
    completed: false
  };
  fetch('/api/tasks/', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(task),
  })
  .then(response => response.json())
  .then(data => {
    tasks.push(data);
    renderTasks();
  })
  .catch(error => {
    console.error('Error:', error);
  });
  document.querySelector("#task-input").value = "";
}

function saveTasks() {
  fetch('/api/tasks/', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(tasks),
  })
  .then(response => response.json())
  .then(data => {
    console.log('Success:', data);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

function loadTasks() {
  fetch('/api/tasks/')
  .then(response => response.json())
  .then(data => {
    tasks = data;
    renderTasks();
  })
  .catch(error => {
    console.error('Error:', error);
  });
}

let tasks = [];
loadTasks();
renderTasks();

document.querySelector("#add-task").addEventListener("click", addTask);