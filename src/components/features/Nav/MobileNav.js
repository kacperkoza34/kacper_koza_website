import React, { useRef } from 'react';
import styles from './MobileNav.module.scss';
import {NavLink} from 'react-router-dom';
import { navConfig } from './NavConfig';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowRight } from '@fortawesome/free-solid-svg-icons';

class MobileNav extends React.Component {
  state = {
    nav: false,
  }
  componentDidMount(){
    this.setState({nav: document.querySelector('#nav')});
    window.addEventListener('resize', () =>{
      this.hideNav();
    })
  }

  displayNav(){
    const tl = gsap.timeline({defaults: { ease: 'power3.inOut'}});
    tl.to(this.state.nav, {duration: 1 , x: 0, autoAlpha: 1})
  }

  hideNav(){
    const tl = gsap.timeline({defaults: { ease: 'power3.inOut'}});
    tl.to(this.state.nav, {duration: 1 , x: 1000, autoAlpha: 1})
  }

  render(){
    return (
      <div className={styles.mobileNav}>
        <div className={styles.burger} onClick={() => this.displayNav() }>
          <FontAwesomeIcon icon={faBars} />
        </div>
        <div id={'nav'} onTouchMove={() => this.hideNav()} className={styles.mobileList}>
          <div className={styles.start}/>
            <div className={styles.wrapper}>
              <div className={styles.burger} onClick={() => this.hideNav() }>
                <FontAwesomeIcon icon={faArrowRight} />
              </div>
              {navConfig.map( ({title, link}) =>(
                <div onClick={() => this.hideNav()} className={styles.singleLink} key={link}>
                  <NavLink to={link}>{title}</NavLink>
                </div>
                )
               )
              }
            </div>
          <div className={styles.end}/>
        </div>

      </div>
    )
  }
}
export default MobileNav;
