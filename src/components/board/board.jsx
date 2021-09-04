import React, { useEffect, useState } from 'react';
import {connect} from 'react-redux';
import styles from './board.module.scss';
import TaskList from '../task-list/task-list';
import { ActionCreator } from '../../store/action';


function Board({tasks, relocTask}) {

  const [isDragOver, setIsDragOver] = useState(false)

  const Titles = [
    {
      title: 'On hold',
      row: 1,
    },
    {
      title: 'In progress',
      row: 2,
    },
    {
      title: 'Needs review',
      row: 3,
    },
    {
      title: 'Approved',
      row: 4,
    },
  ];

  const filterTasks = (filter) => {
    return tasks.filter((item) => item.row === filter)
  }

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const dropHandler = (evt, row) => {
    evt.preventDefault();
    relocTask(row);
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
});

const mapDispatchToProps = (dispatch) => ({
  relocTask(task) {
    dispatch(ActionCreator.relocTask(task));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Board);
