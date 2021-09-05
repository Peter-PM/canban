import React from 'react';
import styles from './header.module.scss';
import { loadCards } from '../api/api';

function Header() {

  return (
    <header className={styles.header}>
      <a
        href={'https://trello.backend.tests.nekidaem.ru/api/v1/users/create/'}
        target="_blank"
        rel="noreferrer"
        className={styles.enter}
      >
        Сгенерировать токен
      </a>
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