import React from 'react';
import { useState } from 'react';
import {connect} from 'react-redux';
import { nanoid } from 'nanoid';
import { ActionCreator } from '../../store/action';
import styles from './note.module.scss';


function Note({setNewTask, row, addTask}) {

  const [task, setTask] = useState('')

  return (
    <form className={styles.form} action="post">
      <textarea
        className={styles.area}
        name="task-text"
        id="task-text"
        placeholder="Ввести заголовок этой карточки"
        onChange={(evt) => {
          setTask(evt.target.value);
        }}
      >
      </textarea>
      <button
        className={styles.post}
        type="submit"
        onClick={(evt) => {
          evt.preventDefault();
          task ? addTask({row: row, id: nanoid(), text: task}) : setNewTask(false);
          setNewTask(false);
        }}
        
      >
        Добавить карточку
      </button>
      <button
        className={styles.delete}
        type="submit"
        onClick={() => setNewTask(false)}
      >
      </button>
    </form>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addTask(task) {
    dispatch(ActionCreator.addTask(task));
  },
});

export default connect(null, mapDispatchToProps)(Note);
