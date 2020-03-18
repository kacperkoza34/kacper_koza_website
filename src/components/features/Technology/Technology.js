import React from 'react';
import styles from './Technology.module.scss';
import AnimateIcon from './AnimateIcon.js';

const Technology = () => {
  return (
    <div className={styles.technology}>
      <div className={styles.start}/>
      <div className={styles.wrapper}>
        <title>
          <h1>Z jakich technologi korzystamy</h1>
        </title>
        <div className={styles.box}>
          <div className={styles.list}>
            <span>Java Script</span>
            <span>Html</span>
            <span>Css</span>
            <span>React</span>
          </div>
          <div className={styles.icon}>
            <AnimateIcon />
          </div>
        </div>
      </div>
    </div>
  );
}
export default Technology;
