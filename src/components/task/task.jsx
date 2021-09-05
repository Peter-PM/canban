import React from 'react';
import PropTypes from 'prop-types';
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

Task.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.number.isRequired,
    row: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    seq_num: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};


export default Task;
