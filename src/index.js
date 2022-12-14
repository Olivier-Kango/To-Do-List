/* eslint-disable no-unused-vars */
import Sortable from 'sortablejs';
import './style.css';
import {
  toDoList, addItem, removeTask, generateElement, update,
} from './addremove.js';
import updateInteractiveList from './interative-list.js';
/* eslint-enable no-unused-vars */

// Add and Remove
const addBtn = document.querySelector('.add-items-btn');
const input = document.querySelector('#text-input');

toDoList.forEach((elt) => {
  generateElement(elt.index, elt.completed, elt.description);
  const lists = document.querySelectorAll('.ul-lists li');
  removeTask(lists);
  update(lists);
  updateInteractiveList(lists);

  input.addEventListener('click', () => {
    lists.forEach((elt2) => {
      elt2.style.background = '';
      elt2.lastElementChild.setAttribute('class', 'fa fa-ellipsis-v');
      elt2.querySelector('span').querySelector('.para-input').style.background = '';
    });
  });
});

const triggerEvent = () => {
  addItem(input.value, false);
  input.value = '';
  const lists = document.querySelectorAll('.ul-lists li');
  removeTask(lists);
  update(lists);
  updateInteractiveList(lists);
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

const dragArea = document.querySelector('.ul-lists');

Sortable.create(dragArea, {
  animation: 350,
});
