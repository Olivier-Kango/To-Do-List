import { toDoList } from './addremove.js';

export default function updateInteractiveList(lists) {
  lists.forEach((elt) => {
    const checkbox = elt.querySelector('span').querySelector('.checkbox');
    let check = false;
    checkbox.addEventListener('click', () => {
      check = !check;
      toDoList.forEach((list) => {
        if (list.index === Number(elt.id)) {
          const index = toDoList.indexOf(list);
          toDoList[index].completed = check;
          localStorage.setItem('toDoList', JSON.stringify(toDoList));
        }
      });
    });
  });
}