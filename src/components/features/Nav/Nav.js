import React from 'react';
import styles from './Nav.module.scss';
import {NavLink} from 'react-router-dom';
import { navConfig } from './NavConfig';

class Nav extends React.Component {
  state = {
    mobileNav: false
  }
  render(){
    if (window.screen.width <= 900) {
      console.log(window.screen.width)
    }
    return (
      <div className={styles.nav}>
        <ul>
        {navConfig.map( ({title, link}) =>(
          <li key={link}>
            <NavLink to={link}>{title}</NavLink>
          </li>
          )
         )
        }
        </ul>
      </div>
    );
  }
}
export default Nav;
