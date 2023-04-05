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
  tasks.push(task);
  saveTasks();
  const taskElement = createTaskElement(task);
  taskList.appendChild(taskElement);
  document.querySelector("#task-input").value = "";
}

function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const storedTasks = localStorage.getItem("tasks");
  if (storedTasks) {
    tasks = JSON.parse(storedTasks);
  }
}

let tasks = [];
loadTasks();
renderTasks();

document.querySelector("#add-task").addEventListener("click", addTask);