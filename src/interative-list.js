import { toDoList } from './addremove.js';

export default function updateInteractiveList(lists) {
  lists.forEach((elt) => {
    const checkbox = elt.querySelector('span').querySelector('.checkbox');
    const content = elt.querySelector('span').querySelector('.para-input');
    checkbox.addEventListener('change', () => {
      content.style.background = 'white';
      elt.style.background = 'white';
      elt.lastElementChild.setAttribute('class', 'fa fa-ellipsis-v');
      toDoList.forEach((list) => {
        if (list.index === Number(elt.id)) {
          const index = toDoList.indexOf(list);
          toDoList[index].completed = checkbox.checked;
          if (checkbox.checked) {
            content.style.textDecoration = 'line-through';
          } else {
            content.style.textDecoration = 'none';
          }
          localStorage.setItem('toDoList', JSON.stringify(toDoList));
        }
      });
    });

    if (checkbox.checked) {
      content.style.textDecoration = 'line-through';
    } else {
      content.style.textDecoration = 'none';
    }

    // Clear All items
    const clear = document.querySelector('.button');

    clear.addEventListener('click', () => {
      if (checkbox.checked) {
        elt.remove();
      }

      for (let index = 0; index < toDoList.length; index += 1) {
        if (toDoList[index].completed === true) {
          toDoList.splice(index, 1);
          localStorage.setItem('toDoList', JSON.stringify(toDoList));
        }
      }
    });
  });
}