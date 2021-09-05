import React from 'react';
import styles from './header.module.scss';
import { loadCards } from '../api/api';

function Header() {

  return (
    <header className={styles.header}>
      <button
        type="button"
        className={styles.enter}
      >
        Canban
      </button>
      <button
        type="button"
        className={styles.load}
        onClick={() => loadCards()}
      >
        Обновить карточки
      </button>
    </header>
  );
}

export default Header;