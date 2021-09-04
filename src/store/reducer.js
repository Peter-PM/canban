import { ActionType } from './action';
import { deleteComments, loadFromLocalStorage } from '../utils/utils';

const initialState = {
  tasks: loadFromLocalStorage(),
};

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
        tasks: deleteComments(state.tasks, action.payload),
      };
    default:
      return state;
  }
};

export {reducer};
