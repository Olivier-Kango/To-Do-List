/* eslint-disable no-unused-vars */
import _ from 'lodash';
import './style.css';
/* eslint-enable no-unused-vars */

const toDoList = [
  {
    description: 'Wash the dishes',
    completed: false,
    index: 1,
  },
  {
    description: 'Food',
    completed: false,
    index: 2,
  },
  {
    description: 'Baith',
    completed: false,
    index: 3,
  },
  {
    description: 'Sleep',
    completed: true,
    index: 4,
  },
];

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