import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import styles from './board.module.scss';
import TaskList from '../task-list/task-list';
import { updateTask } from '../api/api';
import { Titles } from '../../utils/const';

function Board({tasks, currentTask}) {

  const [isDragOver, setIsDragOver] = useState(false)
  
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

Board.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    row: PropTypes.oneOfType([
      PropTypes.string,
      PropTypes.number,
    ]).isRequired,
    seq_num: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
  })).isRequired,
  currentTask: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
  ]).isRequired,
};

const mapStateToProps = (state) => ({
  tasks: state.tasks,
  currentTask: state.currentTask,
});

export default connect(mapStateToProps, null)(Board);
