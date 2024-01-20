// Header.js
import React from 'react';
import styles from './Header.module.css'; // Import the CSS file

const Header = () => {
  return (
    <header className={styles.header}>
      <h1 style={{fontSize: '50'}}>Welcome to IRCTC</h1>
    </header>
  );
};

export default Header;
