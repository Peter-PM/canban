import React, { useEffect } from 'react';
import {connect} from 'react-redux';
import styles from './board.module.scss';
import TaskList from '../task-list/task-list';
import { ActionCreator } from '../../store/action';


function Board({tasks, relocTask}) {
  const Titles = {
    HOLD: 'On hold',
    PROGRESS: 'In progress',
    REVIEW: 'Needs review',
    APPROVED: 'Approved',
  };

  const filterTasks = (filter) => {
    return tasks.filter((item) => item.group === filter)
  }

  useEffect(() => {
    window.localStorage.setItem('tasks', JSON.stringify(tasks));
    console.log(localStorage.getItem('tasks'))
  }, [tasks]);

  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        <li
          className={styles.item}
          onDrop={(evt) => {
            evt.preventDefault();
            const data = evt.dataTransfer.getData("text/plain");
            console.log(data)
            relocTask({id: data, group: Titles.HOLD})
          }}
          onDragOver={(evt) => {
            evt.preventDefault();
            evt.dataTransfer.dropEffect = "move";
            
          }}
        >
          <TaskList
            title={Titles.HOLD}
            tasks={filterTasks(Titles.HOLD)}
          />
        </li>
        <li className={styles.item}>
          <TaskList
            title={Titles.PROGRESS}
            tasks={filterTasks(Titles.PROGRESS)}
          />
        </li>
        <li className={styles.item}>
          <TaskList
            title={Titles.REVIEW}
            tasks={filterTasks(Titles.REVIEW)}
          />
        </li>
        <li className={styles.item}>
          <TaskList
            title={Titles.APPROVED}
            tasks={filterTasks(Titles.APPROVED)}
          />
        </li>
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
