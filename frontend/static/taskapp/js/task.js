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

function renderTasks(tasks) {
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

  // Отправка POST-запроса на сервер Django
  fetch('/api/tasks/', {
    method: 'POST',
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .then(response => response.json())
  .then(newTask => {
    tasks.push(newTask);
    renderTasks(tasks);
    document.querySelector("#task-input").value = "";
  })
  .catch(error => console.error(error));
}

function updateTask(task) {
  // Отправка PUT-запроса на сервер Django
  fetch('/api/tasks/${task.id}/', {
    method: 'PUT',
    body: JSON.stringify(task),
    headers: {
      "Content-Type": "application/json"
    }
  })
  .catch(error => console.error(error));
}

function deleteTask(task) {
  // Отправка DELETE-запроса на сервер Django
  fetch('/api/tasks/${task.id}/', {
    method: "DELETE"
  })
  .then(() => {
    const index = tasks.indexOf(task);
    tasks.splice(index, 1);
    renderTasks(tasks);
  })
  .catch(error => console.error(error));
}

function loadTasks() {
  // Загрузка списка задач с сервера Django
  fetch('/api/tasks/')
  .then(response => response.json())
  .then(data => {
    tasks = data;
    renderTasks(tasks);
  })
  .catch(error => console.error(error));
}

let tasks = [];
loadTasks();

document.querySelector("#add-task").addEventListener("click", addTask);