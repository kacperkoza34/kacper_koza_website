import React from 'react';
import styles from './Header.module.scss';
import Nav from '../../features/Nav/Nav';
import Logo from '../../features/Logo/Logo';

function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.wrapper}>
        <Logo/>
        <Nav/>
      </div>
    </div>
  );
}

export default Header;
