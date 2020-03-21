import React from 'react';
import styles from './Header.module.scss';
import Nav from '../../features/Nav/Nav';
import Logo from '../../features/Logo/Logo';

class Header extends React.Component{
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
      <div className={styles.header}>
        <div className={styles.wrapper}>
          <Logo/>
          <Nav/>
        </div>
      </div>
    );
  }
}

export default Header;
