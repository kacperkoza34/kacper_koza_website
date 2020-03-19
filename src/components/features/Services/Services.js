import React from 'react';
import styles from './Services.module.scss';
import { iconConfig, servicesDescription } from './ServicesContainer.js';
import AnimateDescription from './AnimateDescription.js';


class Services extends React.Component{
  state = {
    activeDescription: 'photo',
    index: 0,
    sliderInterval: true
  }

  handleOn(id, index){
    this.setState({
      activeDescription:id,
      sliderInterval: false,
      index
    });
  }

  handleOut(){
    this.setState({
      sliderInterval: true
    });
  }

  changeDescription(){
    if(this.state.sliderInterval){
      this.setState({activeDescription:iconConfig[this.state.index].id});
      if(this.state.index === 3) this.state.index = 0;
      else this.state.index++;
    }
  }

  componentDidMount(){
    setInterval( () => this.changeDescription(), 8000);
  }

  render(){
    return (
      <div className={styles.services}>
        <div className={styles.wrapper}>
          <div className={styles.iconWrapper}>

            <title>
              <h2>Co moge dla Ciebie zrobić?</h2>
            </title>

            <div className={styles.iconBox}>
              { iconConfig.map( ({id, title, iconSrc }, index) =>(
                <div className={styles.singleIcon}>
                  <div
                  className={id == this.state.activeDescription ?
                     styles.iconActive+' '+styles.icon  : styles.icon}
                    onMouseEnter={() => this.handleOn(id,index)}
                    onMouseLeave={() => this.handleOut()}
                  >
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
      </div>
    );
  }
}
export default Services;
