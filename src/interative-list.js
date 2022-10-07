import { toDoList } from './addremove.js';

export default function updateInteractiveList(lists) {
  lists.forEach((elt) => {
    const checkbox = elt.querySelector('span').querySelector('.checkbox');
    const content = elt.querySelector('span').querySelector('.para-input');
    // let check = false;
    checkbox.addEventListener('click', () => {
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
  });
}