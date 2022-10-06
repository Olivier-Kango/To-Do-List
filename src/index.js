/* eslint-disable no-unused-vars */
import _, { add } from 'lodash';
import './style.css';
import { addTask } from './addremove.js';
import { index } from './addremove.js';
/* eslint-enable no-unused-vars */



let toDoList = [];

// Add and Remove
const AddBtn = document.querySelector('.add-items-btn');
const AddItem = document.querySelector('#text-input');

// Add Task


AddBtn.addEventListener('click', addTask)


toDoList.forEach((e, index) => {
  const { description } = e;
 

});