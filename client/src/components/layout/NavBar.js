import React from 'react';
import PropTypes from 'prop-types';
import styles from './NavBar.module.css';

const NavBar = ({ title, icon }) => {
  return (
    <div className={styles.NavBar}>
      <div className={styles.flexContainer}>
        <i className={icon} style={{ color: '#333' }}></i>
        <p className={styles.title}>{title}</p>
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
