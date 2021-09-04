import React from 'react';
import {connect} from 'react-redux';
import { ActionCreator } from '../../store/action';
import styles from './task.module.scss';

function Task({task, removeTask}) {
  return (
    <>
      <button
        className={styles.button}
        type="button"
        aria-label="Удалить задачу"
        onClick={() => removeTask(task.id)}
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

const mapDispatchToProps = (dispatch) => ({
  removeTask(id) {
    dispatch(ActionCreator.deleteTask(id));
  },
});

export default connect(null, mapDispatchToProps)(Task);
