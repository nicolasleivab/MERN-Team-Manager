import React, { useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import AuthContext from '../../context/auth/authContext';
import MemberContext from '../../context/member/memberContext';

const NavBar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const memberContext = useContext(MemberContext);

  const { isAuthenticated, logoutUser, user } = authContext;
  const { clearMembers } = memberContext;

  const onLogout = () => {
    logoutUser();
    clearMembers();
  };

  const authLinks = (
    <Fragment>
      <li>Welcome {user && user.name}!</li>
      <li>
        <a href='#!' onClick={onLogout}>
          <i
            className='fa fa-sign-out'
            style={{ color: '#fff', marginRight: 5 }}
          ></i>
          Logout
        </a>
      </li>
    </Fragment>
  );

  const guessLinks = (
    <Fragment>
      <li>
        <Link to='./login'>Login</Link>
      </li>
      <li>
        <Link to='./register'>Register</Link>
      </li>
    </Fragment>
  );

  return (
    <div className={styles.NavBar}>
      <div className={styles.flexContainer}>
        <div className={styles.titleContainer}>
          <i className={icon} style={{ color: '#fff' }}></i>
          <p className={styles.title}>{title}</p>
        </div>
        <ul>{isAuthenticated ? authLinks : guessLinks}</ul>
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
