import React from 'react';
import styles from './Logo.module.scss';

const Logo = () => {

  return (
    <div className={styles.logo}>
      PEKSON
    </div>
  );
}

export default Logo;


.logo {
  color: #fff;
  font-weight: 600;
}
