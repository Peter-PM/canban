import store from "../../store/store";
import { ActionCreator } from "../../store/action";
import { TOKEN, END_POINT, Method } from "../../utils/const";

const load = ({
    url,
    method = Method.GET,
    headers = {
      'Content-Type': 'application/json',
      Authorization: `JWT ${TOKEN}` 
    },
    body = null,
  }) => {
  return fetch(`${END_POINT}${url}`, {
    method,
    headers,
    body,
  })
    .then((response) => {
      if (response.status === 204) {
        return true
      }
      if (response.ok) {
        return response ? response.json() : true;
      }
      throw new Error(`${response.status}: ${response.statusText}`);
    });
}

export const loadCards = () => {
  return load({url: ''})
    .then((response) => store.dispatch(ActionCreator.loadTasks(response)))
    .then(() => store.getState())
    .catch()
}

export const postTask = (task) => {
  return load({url: '', method: Method.POST, body: JSON.stringify(task),})
    .then((response) => store.dispatch(ActionCreator.addTask(response)))
};

export const deleteTask = (id) => {
  return load({url: id, method: Method.DELETE, body: JSON.stringify(id),})
    .then(() => store.dispatch(ActionCreator.deleteTask(id)))
};

export const updateTask = (task, row) => {
  const updateTask = {
    row: row,
    seq_num: task.seq_num,
    text: task.text,
  }
  return load({url: task.id, method: Method.PUSH, body: JSON.stringify(updateTask),})
    .then(() => store.dispatch(ActionCreator.relocTask(row)))
};
