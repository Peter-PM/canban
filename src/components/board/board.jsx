import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import styles from './board.module.scss';
import TaskList from '../task-list/task-list';
import { updateTask } from '../api/api';

function Board({tasks, currentTask}) {

  const [isDragOver, setIsDragOver] = useState(false)

  const Titles = [
    {
      title: 'On hold',
      row: 0,
    },
    {
      title: 'In progress',
      row: 1,
    },
    {
      title: 'Needs review',
      row: 2,
    },
    {
      title: 'Approved',
      row: 3,
    },
  ];
  
  useEffect(() => {
      window.localStorage.setItem('tasks', JSON.stringify(tasks));
    }, [tasks]);

  const filterTasks = (filter) => {
    return tasks.filter((item) => +item.row === filter)
  }

  
  const dropHandler = (evt, row) => {
    evt.preventDefault();
    updateTask(currentTask, row)
    setIsDragOver(false);
  }
  
  const dragOverHandler = (evt) => {
    evt.preventDefault();
    setIsDragOver(true);
  }

  const dragEndHandler = (evt) => {
    evt.preventDefault();
    setIsDragOver(false);
  }


  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        {Titles.map((item) => 
          <li
          key={item.row}
          className={`${styles.item} ${isDragOver ? styles.itemActive : ''}`}
          onDrop={(evt) => dropHandler(evt, item.row)}
          onDragOver={(evt) => dragOverHandler(evt)}
          onDragEnd={(evt) => dragEndHandler(evt)}
        >
          <TaskList
            title={item.title}
            tasks={filterTasks(item.row)}
            row={item.row}
          />
        </li>
        )}
      </ul>
    </section>
  );
}

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  currentTask: state.currentTask,
});

export default connect(mapStateToProps, null)(Board);
