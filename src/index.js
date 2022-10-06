/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
import './addremove.js';
/* eslint-enable no-unused-vars */

const toDoList = [];

toDoList.forEach((e) => {
  const { description, completed, index } = e;

  const ulLists = document.querySelector('.ul-lists');

  const list = document.createElement('li');
  list.setAttribute('class', 'list');
  list.setAttribute('id', index);
  ulLists.appendChild(list);

  const span = document.createElement('span');
  span.setAttribute('class', 'list-check');
  list.appendChild(span);

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = completed;
  span.appendChild(checkbox);

  const paragraph = document.createElement('p');
  paragraph.textContent = description;
  span.appendChild(paragraph);

  const ellipsis = document.createElement('i');
  ellipsis.setAttribute('class', 'fa fa-ellipsis-v');
  list.appendChild(ellipsis);
});