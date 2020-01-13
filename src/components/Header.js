import React from 'react';

import Search from './Search';
import styles from '../css/header.module.css';
import Icon from './Icon';
import listIcon from '../assets/menu-icon.svg';

import logo from '../assets/nh-logo.svg';
import hotel from '../assets/nh-hotel.svg';
import beach from '../assets/nh-beach.svg';
import restaurant from '../assets/nh-restaurant.svg';
import golf from '../assets/nh-golf.svg';
import store, { closePopup, openMenu } from '../store';

const Header = (props) => {
  const goHome = () => {
    store.dispatch(closePopup());
    props.history.push('/');
  };

  const headerHeight = props.withSearch ? styles.large : styles.small;

  return (
    <div className={[styles.header, headerHeight].join(' ')}>
      <div className={styles.menubutton} onClick={() => store.dispatch(openMenu())}>
        <Icon img={listIcon} size="large"/>
      </div>
      <div className={styles.headerWrapper}>
        <div onClick={() => goHome()} className={styles.logo}>
          <img src={logo}/>
        </div>
        <div className={styles.headerInner}>
          <div className={styles.icons}>
            <img src={hotel}/>
            <img src={beach}/>
            <img src={restaurant}/>
            <img src={golf}/>
          </div>
          {props.withSearch && <Search/>}
        </div>
      </div>
    </div>
  );
}

export default Header;
