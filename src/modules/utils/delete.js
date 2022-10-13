import Read from './read.js';

module.exports class Delete {
  // Delete from the UI
  static #fromUi = (task) => {
    task.remove();
  };

  // Delete from localStorage
  static #fromStorage = (task) => {
    let tasks = Read.getTasks();
    tasks = tasks.filter(
      (toDoTask) => toDoTask.index !== parseInt(task.getAttribute('data-index'), 10),
    );
    Read.setTasks(tasks);
  };

  // Update task index in the UI
  static #updateUiIndex = (elements) => {
    // Getting the tasks index's
    let counter = 1;
    [...elements].forEach((element) => {
      element.setAttribute('data-index', `${counter}`);
      counter += 1;
    });
  };

  // Edit task index in local storage
  static #updateStorageIndex = () => {
    const tasks = Read.getTasks();
    let counter = 1;
    tasks.forEach((task) => {
      task.index = counter;
      counter += 1;
    });

    Read.setTasks(tasks);
  };

  // get the elements , search for index, delete it.
  static task = (task) => {
    Delete.#fromStorage(task);
    Delete.#fromUi(task);
  };

  static updateIndexes = (elements) => {
    Delete.#updateUiIndex(elements);
    Delete.#updateStorageIndex();
  };
}
