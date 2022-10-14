import { clearTask } from '../base';

describe('clear completed', () => {
  test('Tasks from UI', () => {
    // Arrange
    document.body.innerHTML = `
      <ul class="container">
        <li class="list_todo-item checked-item" data-index="1">
          <button class="delete-btn" data-index="1"></button>
        </li>
        <li class="list_todo-item" data-index="2">
          <button class="delete-btn" data-index="2"></button>
        </li>
      </ul>
    `;

    const deletBtn = document.querySelector('.delete-btn');
    const container = document.querySelector('.container');

    // Act
    clearTask(container, deletBtn);
    deletBtn.click();

    const taskItems = document.querySelectorAll('.list_todo-item');

    // Assert
    expect(taskItems).toHaveLength(1);
  });
});

describe('clear completed', () => {
  test('Tasks from LocalStorage', () => {
    // Arrange
    document.body.innerHTML = `
      <ul class="container">
        <li class="list_todo-item checked-item" data-index="1">
          <button class="delete-btn" data-index="1"></button>
        </li>
        <li class="list_todo-item" data-index="2">
          <button class="delete-btn" data-index="2"></button>
        </li>
      </ul>
    `;

    const deletBtn = document.querySelector('.delete-btn');
    const container = document.querySelector('.container');
    const tasks = [
      {
        description: 'Wash the dishes',
        completed: false,
        index: 1,
      },
      {
        description: 'Take a walk!',
        completed: false,
        index: 2,
      },
    ];

    // Act
    localStorage.setItem('Tasks', JSON.stringify(tasks));
    clearTask(container, deletBtn);
    deletBtn.click();
    const taskItems = JSON.parse(localStorage.getItem('Tasks'));

    // Assert
    expect(taskItems).toHaveLength(1);
    expect(taskItems[0].index).toBe(1);
  });
});