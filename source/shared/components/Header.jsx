import React from 'react';
import { Link } from 'react-router';

import styles from './Header.css';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Mi primera app con React</h1>

      <nav className={styles.navigation}>
        <Link to="/" className={styles.link}>
          Home
        </Link>

        <a
          href="https://platzi.com/"
          rel="noopener noreferrer"
          target="_blank"
          className={styles.link}
        >
          Platzi
        </a>
      </nav>
    </header>
  );
}

export default Header;
