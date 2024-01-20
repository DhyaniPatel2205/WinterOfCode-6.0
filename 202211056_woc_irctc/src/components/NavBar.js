import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {

  const user = JSON.parse(localStorage.getItem("user"));

  return (
    <nav className={styles.nav}>
      <ul className={styles.ul}>
        <li className={styles.li}><Link to="/">Home</Link></li>
        <li className={styles.li}><Link to="/about">About Us</Link></li>
        <li className={styles.li}><Link to="/helpline">Helpline</Link></li>
        {user ? (
          <>
            <li className={styles.li}><Link to="/payment">Payment</Link></li>
            <li className={styles.li}><Link to="/booklist">Booklist</Link></li>
            <li className={styles.li}><Link to="/profile">Profile</Link></li>
            <li className={styles.li}><Link to="/search">Search Train</Link></li>
            {/* <li className={styles.li}><Link to="/logout">Logout</Link></li> */}
          </>
        ) 
        : (
          <>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/signup">Register</Link></li>
          </>
        )}
        {/* <li className={styles.li}><Link to="/profile">Profile</Link></li> */}
        {/* <li className={styles.li}><Link to="/login">Login</Link></li> */}
        {/* <li className={styles.li}><Link to="/signup">Register</Link></li> */}
      </ul>
    </nav>
  );
};

export default Navbar;
