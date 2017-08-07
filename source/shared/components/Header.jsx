import React from 'react';
import { Link } from 'react-router';

import styles from './Header.css';

function Header () {
  return (
    <header className="{styles.header}">
      <h1>Mi primera app con React</h1>

      <nav role="navigation">
        <Link to="/">
          Home
        </Link>

        <a
          href="https://platzi.com/"
          target="_blank"
        >
          Platzi
        </a>
      </nav>
    </header>
  );
}

export default Header;
