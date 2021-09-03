import React from 'react';
import styles from './board.module.scss';
import TaskList from '../task-list/task-list';
import Note from '../note/note';

function Board() {
  return (
    <section className={styles.section}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <p className={`${styles.title} ${styles.titleHold}`}>On hold <span>(0)</span></p>
          <TaskList/>
          <button className={styles.button} type="button">Добавить карточку</button>
        </li>
        <li className={styles.item}>
          <p className={`${styles.title} ${styles.titleProgress}`}>In progress <span>(0)</span></p>
          <TaskList/>
          <button className={styles.button} type="button">Добавить карточку</button>
        </li>
        <li className={styles.item}>
          <p className={`${styles.title} ${styles.titleReview}`}>Needs review <span>(0)</span></p>
          <button className={styles.button} type="button">Добавить карточку</button>
        </li>
        <li className={styles.item}>
          <p className={`${styles.title} ${styles.titleApproved}`}>Approved <span>(0)</span></p>
          <Note/>
        </li>
      </ul>
    </section>
  );
}

export default Board;
