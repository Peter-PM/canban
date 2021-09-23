import React from 'react';
import styles from './header.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <a href="/" className={styles.enter}>Войти в Canban</a>
    </header>
  );
}

export default Header;
