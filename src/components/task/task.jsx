import React from 'react';
import styles from './task.module.scss';
import { deleteTask} from '../api/api';

function Task({task}) {

  const deleteButtonHandler = (data) => {
    deleteTask(data);
  }
  return (
    <>
      <button
        className={styles.button}
        type="button"
        aria-label="Удалить задачу"
        onClick={() => deleteButtonHandler(task.id)}
      >        
      </button>
      <h2 className={styles.title}>
        <b>id: </b>
        <span className={styles.id}>{task.id}</span>
      </h2>
      <p className={styles.note}>{task.text}</p>
    </>
  );
}

export default Task;
