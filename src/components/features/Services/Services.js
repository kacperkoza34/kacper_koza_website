import React from 'react';
import styles from './Services.module.scss';
import { iconConfig, servicesDescription } from './ServicesContainer.js';
import AnimateDescription from './AnimateDescription.js';


class Services extends React.Component{
  state = {
    activeDescription: 'default'
  }

  handleOn(id){
    this.setState({activeDescription:id});
  }

  handleOut(){
    this.setState({activeDescription:'default'});
  }

  render(){
    return (
      <div className={styles.services}>
        <div className={styles.wrapper}>

          <title>
            <h2>Co moge dla Ciebie zrobić?</h2>
          </title>

          <div className={styles.iconBox}>
            { iconConfig.map( ({id, title, iconSrc }) =>(
              <div
                   className={styles.singleIcon}
                   onMouseEnter={() => this.handleOn(id)}
                   onMouseLeave={() => this.handleOut()}
              >
                <div className={styles.icon}>
                  <img src={iconSrc} alt='ups'/>
                </div>
                <h3>{title}</h3>
              </div>
            ))
            }
          </div>
          <AnimateDescription
            id={this.state.activeDescription}
            active={servicesDescription[this.state.activeDescription]}
          />
        </div>
      </div>
    );
  }
}
export default Services;
