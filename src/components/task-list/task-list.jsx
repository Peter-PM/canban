import React from 'react';
import { useState } from 'react';
import styles from './task-list.module.scss';
import Task from '../task/task';
import Note from '../note/note';

function TaskList({title, tasks}) {

  const [newTask, setNewTask] = useState(false);

  return (
    <>
      <p className={`${styles.title}`}>{title} <span>({tasks.length})</span></p>
      <ul className={styles.list}>
        {tasks ? (tasks.map((item) => {
          return (
            <li
              key={item.id}
              id={item.id}
              className={styles.task}
              draggable="true"
              onDragStart={(evt) => {
                evt.dataTransfer.effectAllowed = "move";
                evt.dataTransfer.setData("text/plain", evt.target.id);
            }}
            >
            <Task
              task={item}
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
          group={title}
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

export default TaskList;
