/** @returns {Promise<import('jest').Config>} */
import Read from './read.js';

module.exports class Create {
  // Check for cheked task
  static #checkedtask = (completed) => {
    if (completed) {
      return 'checked';
    }
    return '';
  };

  // add task to UI
  static #taskToUi = (task, container) => {
    const taskTemplate = `
    <li class="list_todo-item flex justify-between ${Create.#checkedtask(
      task.completed,
    )}-item align-center border px" data-index="${task.index}">
      <div class="flex align-center grow-2">
        <input type="checkbox" name="check" id="check" ${Create.#checkedtask(
      task.completed,
    )} data-index="${task.index}"/>
        <div class="pos-r w-100">
          <input type="text" value="${
            task.description
          }" class="task-description ${Create.#checkedtask(
            task.completed,
          )} w-100 p" contenteditable="true"/>
        </div>
      </div>
      <div class="item-icons flex align-center grow-1">
        <button class="btn btn-tool delete-btn" data-index="${task.index}">
          &#x1F5D1;
        </button>
      </div>
    </li>
  `;

    container.innerHTML += taskTemplate;
  };

  // add task to localStorage
  static #taskToStorage = (task) => {
    const tasks = Read.getTasks();
    tasks.push(task);
    Read.setTasks(tasks);
  };

  // create a task
  static task = (taskDescription, container) => {
    const task = {
      description: taskDescription,
      completed: false,
      index: Read.getTasks().length + 1,
    };

    Create.#taskToUi(task, container);
    Create.#taskToStorage(task);
  };

  // Create tasks when page is loaded
  static tasks = (container) => {
    const tasks = Read.getTasks();
    tasks.forEach((task) => {
      Create.#taskToUi(task, container);
    });
  };
}
