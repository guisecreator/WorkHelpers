const form = document.querySelector('form');
const input = document.querySelector('#new-task');
const list = document.querySelector('#task-list');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 

  const taskName = input.value;
  if (!taskName) {
    return; 
  }

  const taskItem = document.createElement('li');
  const taskText = document.createTextNode(taskName);
  taskItem.appendChild(taskText);

  const completeButton = document.createElement('button');
  completeButton.textContent = '✓';
  completeButton.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });
  taskItem.appendChild(completeButton);

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'X';
  deleteButton.addEventListener('click', () => {
    taskItem.remove();
  });
  taskItem.appendChild(deleteButton);

  list.appendChild(taskItem);
  input.value = ''; 
});

completeButton.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });