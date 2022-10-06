let index = 0;
export default function addTask() {
  index += index + 1;
  const ulLists = document.querySelector('.ul-lists');
  const list = document.createElement('li');
  list.setAttribute('class', 'list');
  list.setAttribute('id', `${index}`);
  ulLists.appendChild(list);

  const span = document.createElement('span');
  span.setAttribute('class', 'list-check');
  list.appendChild(span);

  const checkbox = document.createElement('input');
  checkbox.setAttribute('type', 'checkbox');
  checkbox.checked = false;
  span.appendChild(checkbox);

  const paragraph = document.createElement('p');
  span.appendChild(paragraph);

  const ellipsis = document.createElement('i');
  ellipsis.setAttribute('class', 'fa fa-ellipsis-v');
  list.appendChild(ellipsis);
}
