import { ActionType } from './action';
import { deleteTasks, loadFromLocalStorage } from '../utils/utils';

const initialState = {
  tasks: loadFromLocalStorage(),
  currentTask: '',
};

// const relocTask = (arr, task) => {
//   arr.tasks = deleteTasks(arr.tasks, arr.currentTask.id);
//   arr.currentTask = {...arr.currentTask, row: task};
//   arr.tasks = [...arr.tasks, arr.currentTask];
//   return arr.tasks
// }

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ActionType.ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case ActionType.DELETE_TASK:
      return {
        ...state,
        tasks: deleteTasks(state.tasks, action.payload),
      };
    case ActionType.ADD_TASK_TO_CURRENT:
      return {
        ...state,
        currentTask: action.payload,
      };
    case ActionType.RELOCATION_TASK:
      state.tasks = deleteTasks(state.tasks, state.currentTask.id);
      state.currentTask = {...state.currentTask, row: action.payload};
      // state.tasks = [...state.tasks, state.currentTask];
      return {
        ...state,
        tasks: [...state.tasks, state.currentTask],
      };
    default:
      return state;
  }
};

export {reducer};
