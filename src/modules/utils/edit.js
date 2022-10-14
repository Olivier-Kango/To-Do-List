import Read from './read.js';

export default class Edit {
  // edit the local storage
  static #storage(task, taskDescription) {
    const tasks = Read.getTasks();
    tasks.forEach((todoTask, index) => {
      if (index === parseInt(task.getAttribute('data-index') - 1, 10)) {
        tasks[index].description = taskDescription.value;
      }
    });

    Read.setTasks(tasks);
  }

  // edit task
  static task(task, taskDescription) {
    Edit.#storage(task, taskDescription);
  }
}
