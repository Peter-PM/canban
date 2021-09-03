import React from 'react';
import styles from './task-list.module.scss';

function TaskList() {
  return (
    <ul className={styles.list}>
      <li className={styles.task}>
        <button className={styles.button} type="button"></button>
        <h2 className={styles.title}>
          <b>id: </b>
          <span className={styles.id}>11111111111</span>
        </h2>
        <p className={styles.note}>текст asas das  asdaqw q wdasd asqw e sdthg sdfsdtgsd sdfs dsdfwe sdf </p>
      </li>
      <li className={styles.task}>
        <button className={styles.button} type="button"></button>
        <h2 className={styles.title}>
          <b>id: </b>
          <span className={styles.id}>11111111112</span>
        </h2>
        <p className={styles.note}>текст</p>
      </li>
    </ul>
  );
}

export default TaskList;
