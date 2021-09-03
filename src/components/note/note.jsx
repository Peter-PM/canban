import React from 'react';
import styles from './note.module.scss';

function Note() {
  return (
    <form className={styles.form} action="post">
      <textarea className={styles.area} name="task-text" id="task-text" placeholder="Ввести заголовок этой карточки"></textarea>
      <button className={styles.post} type="submit">Добавить карточку</button>
    </form>
  );
}

export default Note;
