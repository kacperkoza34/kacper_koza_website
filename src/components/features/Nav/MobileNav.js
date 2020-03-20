import React, { useRef } from 'react';
import styles from './MobileNav.module.scss';
import {NavLink} from 'react-router-dom';
import { navConfig } from './NavConfig';
import gsap from 'gsap';

class MobileNav extends React.Component {

  componentDidMount(){
    window.addEventListener('resize', () =>{
      this.hideNav();
    })
  }

  displayNav(){
    const animation = document.querySelector('#test');
    console.log(animation);
    const tl = gsap.timeline({defaults: { ease: 'power3.inOut'}});
    tl.to(animation,{duration: 1 , x: 0, autoAlpha: 1})
  }

  hideNav(){
    const animation = document.querySelector('#test');
    console.log(animation);
    const tl = gsap.timeline({defaults: { ease: 'power3.inOut'}});
    tl.to(animation,{duration: 1 , x: 1000, autoAlpha: 1})
  }

  render(){
    return (
      <div className={styles.mobileNav}>
        <div onClick={() => this.displayNav() }>x</div>
        <div id={'test'} onTouchMove={() => this.hideNav()} className={styles.mobileList}>
          <div className={styles.start}/>
            <div className={styles.wrapper}>
              <div onClick={() => this.hideNav() }>xsss</div>
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
