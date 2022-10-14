import Create from './utils/create.js';
import Delete from './utils/delete.js';
import Edit from './utils/edit.js';
import Check from './utils/check.js';

// Clear flieds
const formClear = (task) => {
  task.value = '';
};

const createTask = (task, container, form) => {
  // when addBtn pressed add task to UI and LocalStorage.
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (task.value !== '') {
      Create.task(task.value, container);
    }
    formClear(task);
  });
};

const deleteTask = (container) => {
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('delete-btn')) {
      const deleteBtn = e.target;
      const task = container.querySelector(
        `li[data-index= "${deleteBtn.getAttribute('data-index')}"]`,
      );
      Delete.task(task);

      // Get the rest task Index's
      const tasks = document.getElementsByClassName('list_todo-item');
      const toolBtns = document.getElementsByClassName('delete-btn');

      Delete.updateIndexes(tasks);
      Delete.updateIndexes(toolBtns);
    }
  });
};

// Edit Task
const editTask = (container) => {
  // Add background color
  container.addEventListener('click', (e) => {
    if (e.target.classList.contains('task-description')) {
      const task = e.target.parentElement.parentElement.parentElement;
      task.classList.add('bg');
    }
  });
  // console.log(container);
  container.addEventListener('focusout', (e) => {
    if (e.target.classList.contains('task-description')) {
      const taskDescription = e.target;
      const task = taskDescription.parentElement.parentElement.parentElement;
      Edit.task(task, taskDescription);
      task.classList.remove('bg');
    }
  });
};

// Check if task is comleted
const checkTask = (container) => {
  container.addEventListener('change', (e) => {
    const check = e.target;
    if (check.getAttribute('type') === 'checkbox') {
      const checkBool = check.checked;
      const task = check.parentElement.parentElement;
      const taskDes = task.querySelector('.task-description');
      Check.task(task, checkBool, taskDes);
    }
  });
};

// Check if task is comleted
const clearTask = (container, btn) => {
  btn.addEventListener('click', () => {
    const checkedTasks = container.getElementsByClassName('checked-item');
    [...checkedTasks].forEach((task) => {
      Delete.task(task);
    });
    // Update tasks Indexes
    const tasks = document.getElementsByClassName('list_todo-item');
    const toolBtns = container.getElementsByClassName('delete-btn');
    Delete.updateIndexes(tasks);
    Delete.updateIndexes(toolBtns);
  });
};

const loadTasks = (container) => {
  // when page loaded add tasks to UI.
  document.addEventListener('DOMContentLoaded', () => {
    Create.tasks(container);
  });
};

export {
  createTask, deleteTask, editTask, checkTask, clearTask, loadTasks,
};
