export const ActionType = {
  ADD_TASK: 'add-task',
  DELETE_TASK: 'delete-task',
  SAVE_TASKS: 'save-tasks',
  RELOCATION_TASKS: 'relocation-task'
};

export const ActionCreator = {
  addTask: (task) => ({
    type: ActionType.ADD_TASK,
    payload: task,
  }),
  deleteTask: (task) => ({
    type: ActionType.DELETE_TASK,
    payload: task,
  }),
  saveTasks: (task) => ({
    type: ActionType.SAVE_TASKS,
    payload: task,
  }),
  relocTask: (task) => ({
    type: ActionType.RELOCATION_TASKS,
    payload: task,
  }),
};
