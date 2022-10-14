export default class Read {
  // Get data from local storage
  static getTasks = () => {
    let tasks = [];
    if (localStorage.getItem('toDoList')) {
      tasks = JSON.parse(localStorage.getItem('toDoList'));
    }

    return tasks;
  };

  static setTasks = (tasks) => {
    localStorage.setItem('toDoList', JSON.stringify(tasks));
  };
}
