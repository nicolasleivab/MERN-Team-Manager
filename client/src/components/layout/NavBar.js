import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';

const NavBar = ({ title, icon }) => {
  return (
    <div className={styles.NavBar}>
      <div className={styles.flexContainer}>
        <div className={styles.titleContainer}>
          <i className={icon} style={{ color: '#333' }}></i>
          <p className={styles.title}>{title}</p>
        </div>
        <ul>
          <li>
            <Link to='./' className={styles.navLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to='./about' className={styles.navLink}>
              About
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

NavBar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string
};

NavBar.defaultProps = {
  title: 'Team Manager',
  icon: 'fa fa-users fa-lg'
};

export default NavBar;
