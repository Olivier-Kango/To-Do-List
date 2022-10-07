export const toDoList = JSON.parse(localStorage.getItem('toDoList')) || [];

let index = toDoList.length;

export const generateElement = (index, completed, description) => {
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
  checkbox.checked = completed;
  span.appendChild(checkbox);

  const paragraph = document.createElement('p');
  paragraph.textContent = description;
  span.appendChild(paragraph);

  const ellipsis = document.createElement('i');
  ellipsis.setAttribute('class', 'fa fa-ellipsis-v');
  list.appendChild(ellipsis);
};

export const addItem = (description, completed) => {
  const item = { description, index, completed };
  if (description !== '') {
    index += 1;
    item.index = index;
    toDoList.push(item);
    localStorage.setItem('toDoList', JSON.stringify(toDoList));
    generateElement(index, item.completed, item.description);
  }
};

export const removeTask = (lists) => {
  lists.forEach((elt) => {
    elt.addEventListener('click', () => {
      lists.forEach((elt2) => {
        elt2.style.background = '';
        elt2.lastElementChild.setAttribute('class', 'fa fa-ellipsis-v');
      });
      elt.style.background = '#fffeca';
      elt.lastElementChild.classList = 'fa fa-trash';
    });
  });
  for (let i = 0; i < lists.length; i += 1) {
    lists[i].lastElementChild.addEventListener('click', () => {
      toDoList.forEach((list) => {
        if (list.index === Number(lists[i].id)) {
          const index = toDoList.indexOf(list);
          toDoList.splice(index, 1);
          localStorage.setItem('toDoList', JSON.stringify(toDoList));
        }
      });
      lists[i].remove();
    });
  }
};
