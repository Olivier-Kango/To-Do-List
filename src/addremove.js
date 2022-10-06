// Implement a function for adding a new task (add a new element to the array).
export const toDoList = [];

let i = 0;
export const addItem = document.getElementById('text-input');
export default function addTask() {
  i += 1;
  const ulLists = document.querySelector('.ul-lists');
  const list = document.createElement('li');
  list.setAttribute('class', 'list');
  list.setAttribute('id', `${i}`);
  ulLists.appendChild(list);
  if (addItem.value === '') {
    list.style.display = 'none';
  }

  const span = document.createElement('span');
  span.setAttribute('class', 'list-check');
  list.appendChild(span);

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = false;
  span.appendChild(checkbox);

  const paragraph = document.createElement('p');
  paragraph.textContent = addItem.value;
  span.appendChild(paragraph);

  const ellipsis = document.createElement('i');
  ellipsis.setAttribute('class', 'fa fa-ellipsis-v');
  list.appendChild(ellipsis);

  let hash = {
    description: addItem.value,
    index: i,
    completed: false,
  }

  toDoList.push(hash);
}