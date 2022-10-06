/* eslint-disable no-unused-vars */
import _, { add } from 'lodash';
import './style.css';
import addTask, { addItem } from './addremove.js';
/* eslint-enable no-unused-vars */

// let toDoList = [];

// Add and Remove
const AddBtn = document.querySelector('.add-items-btn');

AddBtn.onclick = addTask;

addItem.addEventListener('keypress', (enter) => {
  if (enter.key === 'Enter') {
    enter.preventDefault();
    AddBtn.onclick();
  }
});