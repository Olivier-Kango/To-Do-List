/* eslint-disable no-unused-vars */
import _, { add } from 'lodash';
import './style.css';
import {
  toDoList, addItem, removeTask, generateElement, update,
} from './addremove.js';
import './interative-list.js';
/* eslint-enable no-unused-vars */

// Add and Remove
const addBtn = document.querySelector('.add-items-btn');
const input = document.querySelector('#text-input');

toDoList.forEach((elt) => {
  generateElement(elt.index, elt.completed, elt.description);
  const lists = document.querySelectorAll('.ul-lists li');
  removeTask(lists);
  update(lists);
});

const triggerEvent = () => {
  addItem(input.value, false);
  input.value = '';
  const lists = document.querySelectorAll('.ul-lists li');
  removeTask(lists);
  update(lists);
};

addBtn.addEventListener('click', () => {
  triggerEvent();
});

input.addEventListener('keypress', (enter) => {
  if (enter.key === 'Enter') {
    enter.preventDefault();
    triggerEvent();
  }
});
