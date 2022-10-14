import Read from './read.js';

export default class Check {
  // Check the task on the Ui
  static #forUi = (task, check, taskDes) => {
    if (check) {
      taskDes.classList.add('checked');
      task.classList.add('checked-item');
    } else {
      taskDes.classList.remove('checked');
      task.classList.remove('checked-item');
    }
  };

  // check the task on the local storage
  static #forStorage = (task, check) => {
    const tasks = Read.getTasks();
    tasks.forEach((toDoTask) => {
      if (toDoTask.index === parseInt(task.getAttribute('data-index'), 10)) {
        toDoTask.completed = check;
      }
    });
    Read.setTasks(tasks);
  };

  static task = (task, check, taskDes) => {
    Check.#forUi(task, check, taskDes);
    Check.#forStorage(task, check);
  };
}
