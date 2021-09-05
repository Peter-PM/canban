export const ActionType = {
  ADD_TASK: 'add-task',
  DELETE_TASK: 'delete-task',
  SAVE_TASKS: 'save-tasks',
  RELOCATION_TASK: 'relocation-task',
  ADD_TASK_TO_CURRENT: 'add-current-task',
  LOAD_TASKS: 'load-tasks-from-server',
};

export const ActionCreator = {
  addTask: (task) => ({
    type: ActionType.ADD_TASK,
    payload: task,
  }),
  loadTasks: (tasks) => ({
    type: ActionType.LOAD_TASKS,
    payload: tasks,
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
    type: ActionType.RELOCATION_TASK,
    payload: task,
  }),
  addCurrent: (task) => ({
    type: ActionType.ADD_TASK_TO_CURRENT,
    payload: task,
  }),
};
