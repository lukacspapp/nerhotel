import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import closeIcon from '../assets/close-icon.svg';
import styles from '../css/menu.module.css';
import Icon from './Icon';
import image from '../assets/nh-main.svg';
import logo from '../assets/nh-logo.svg';
import store, { closeMenu } from '../store';

const Menu = (props) => {
  if (!props.showMenu) {
    return null;
  }
  const isDesktop = window.innerWidth > 768;

  return (
    <div className={styles.menu}>
      <div onClick={() => store.dispatch(closeMenu())} className={styles.close}>
        <Icon img={closeIcon} size="large"/>
      </div>
      {isDesktop && <div className={styles.logoWrapper}>
        <img src={logo} alt=""/>
      </div>}
      <ul className={styles.menulist}>
        <li><Link to="/">Térkép</Link></li>
        <li><Link to="/about">Mi ez?</Link></li>
        <li><Link to="/contact">Kontakt</Link></li>
        <li><a href="https://docs.google.com/forms/d/e/1FAIpQLSdi6uNP-ML46outzCbOifdwKefAaB1x_j9eXMzeTJYGB5NEnA/viewform"
               target="_blank" rel="noopener noreferrer">Küldj be!</a></li>
        <li><a href="https://tamogatas.k-monitor.hu" target="_blank" rel="noopener noreferrer">Támogatás</a></li>
      </ul>
      {isDesktop && <div className={styles.imageWrapper}>
        <img src={image} alt=""/>
      </div>}
      <div className={styles.footer}>
        <p><strong>K-Monitor<br/>Közhasznú Egyesület</strong></p>
        <p>Levelezési cím:</p>
        <p>1062 Budapest, Bajza u. 23 I/1</p>
        <a href="mailto:info@k-monitor.hu">info@k-monitor.hu</a>
      </div>
    </div>
  );
};

const mapStateToProps = state => ({
  showMenu: state.showMenu
});

export default connect(mapStateToProps)(Menu);
