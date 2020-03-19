import React from 'react';
import styles from './Nav.module.scss';
import {NavLink} from 'react-router-dom';
import { navConfig } from './NavConfig';
import MobileNav from './MobileNav';

class Nav extends React.Component {
  state = {
    mobile: false
  }

  componentDidMount(){
    if(window.innerWidth <= 900) this.setState({mobile:true});
    window.addEventListener('resize', () =>{
      if(window.innerWidth <= 900) this.setState({mobile:true});
      else this.setState({mobile:false});
    })
  }

  render(){
    return (
        <>
        { !this.state.mobile ?

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

          :
          <MobileNav/>
          }
        </>
    );
  }
}
export default Nav;
