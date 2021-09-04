export const deleteComments = (array, id) => {
  const index = array.findIndex((task) => task.id === id);
  
  if (index === -1) {
    throw new Error('Can\'t delete unexisting comment');
  }
  
  array = [
    ...array.slice(0, index),
    ...array.slice(index + 1),
  ];
  
return array
}
  
export const loadFromLocalStorage = () => {
    try {
      const stateStr = localStorage.getItem('tasks');
      return stateStr ? JSON.parse(stateStr) : [];
    } catch (e) {
      console.error(e);
      return undefined;
  }
};