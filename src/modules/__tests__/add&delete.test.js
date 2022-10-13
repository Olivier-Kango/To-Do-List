/**
 * @jest-environment jsdom
 */

// import e from './__mocks__/e.js';

import Create from '../utils/create.js';
import Delete from '../utils/delete.js';

describe('Test Task', () => {
  describe('Adding', () => {
    test('Wash the dishes task should be added to the UI', () => {
      // Arrange
      document.body.innerHTML = '<ul class="todo_body_list"></ul>';
      const todoList = document.querySelector('.todo_body_list');
      const taskDescription = 'Wash the dishes';

      // Act
      Create.task(taskDescription, todoList);
      const taskItems = todoList.querySelectorAll('li');

      // Assert
      expect(taskItems).toHaveLength(1);
    });
  });

  describe('Deleting', () => {
    test('Wash the dishes task should be removed from the UI', () => {
      // Arrange
      document.body.innerHTML = '<ul class="todo_body_list"></ul>';
      const todoList = document.querySelector('.todo_body_list');
      const taskDescription = 'Wash the dishes';

      // Act
      Create.task(taskDescription, todoList);
      const taskItem = todoList.querySelector('li');

      Delete.task(taskItem);
      const taskItemDeleted = todoList.querySelector('li');

      // Assert
      expect(taskItemDeleted).toBeNull();
    });
  });
});
