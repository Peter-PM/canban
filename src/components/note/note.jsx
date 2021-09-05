import React from 'react';
import PropTypes from 'prop-types';
import { useState } from 'react';
import styles from './note.module.scss';
import { postTask } from '../api/api';

function Note({setNewTask, row}) {

  const [taskText, setTask] = useState('')

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
          taskText ? postTask({row: row, text: taskText}) : setNewTask(false);
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

Note.propTypes = {
  setNewTask: PropTypes.func.isRequired,
  row: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default Note;
