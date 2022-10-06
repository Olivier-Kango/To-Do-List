/* eslint-disable no-unused-vars */
import _, { add } from 'lodash';
import './style.css';
import addTask, { AddItem, index } from './addremove.js';
/* eslint-enable no-unused-vars */

let toDoList = [];

// Add and Remove
const AddBtn = document.querySelector('.add-items-btn');

AddBtn.onclick = addTask;

AddBtn.addEventListener('click', () => {
  AddBtn.onclick = addTask;
  const hash = {
    description: AddItem.value,
    completed: false,
    index: index,
  };
  toDoList.push(hash);
});

AddItem.addEventListener('keypress', (enter) => {
  if (enter.key === 'Enter') {
    enter.preventDefault();
    AddBtn.onclick();
    const hash = {
      description: AddItem.value,
      completed: false,
      index: index,
    };
    toDoList.push(hash);
  }
});