import React from 'react';
import { useState } from 'react';
import {connect} from 'react-redux';
import { ActionCreator } from '../../store/action';
import styles from './task-list.module.scss';
import Task from '../task/task';
import Note from '../note/note';

function TaskList({title, row, tasks, addTaskInCurrent}) {

  const [newTask, setNewTask] = useState(false);

  const dragStartHandler = (evt, task) => {
    addTaskInCurrent(task);
  };

  const dragEndHandler = (evt) => {
    
  }

  const dragOverHandler = (evt) => {
    evt.preventDefault();
  }

  const dropHandler = (evt, task) => {
    evt.preventDefault();
  };

  return (
    <>
      <p className={`${styles.title}`}>{title} <span>({tasks.length})</span></p>
      <ul className={styles.list}>
        {tasks ? (tasks.map((task) => {
          return (
            <li
              key={task.id}
              id={task.id}
              className={styles.task}
              draggable={true}
              onDragStart={(evt) => dragStartHandler(evt, task)}
              onDragLeave={(evt) => dragEndHandler(evt)}
              onDragOver={(evt) => dragOverHandler(evt)}
              onDragEnd={(evt) => dragEndHandler(evt)}
              onDrop={(evt) => dropHandler(evt, task)}
            >
            <Task
              task={task}
            />
          </li>
          )
        })) : (
          ''
        )}
      </ul>
      {newTask ? (
        <Note
          setNewTask={setNewTask}
          row={row}
        />
      ) : (
      <button
        className={styles.button}
        type="button"
        onClick={()=> setNewTask(true)}
      >
        Добавить карточку
      </button>
      )}
    </>
  );
}

const mapDispatchToProps = (dispatch) => ({
  addTaskInCurrent(task) {
    dispatch(ActionCreator.addCurrent(task));
  },
});

export default connect(null, mapDispatchToProps)(TaskList);
