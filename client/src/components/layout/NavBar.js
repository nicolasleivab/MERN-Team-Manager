import React, { useContext, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styles from './NavBar.module.css';
import AuthContext from '../../context/auth/authContext';
import MemberContext from '../../context/member/memberContext';
import TeamContext from '../../context/team/teamContext';
import ModalContext from '../../context/modal/modalContext';

const NavBar = ({ title, icon }) => {
  const authContext = useContext(AuthContext);
  const memberContext = useContext(MemberContext);
  const teamContext = useContext(TeamContext);
  const modalContext = useContext(ModalContext);

  const { isAuthenticated, logoutUser, user } = authContext;
  const { clearMembers } = memberContext;
  const { clearTeams } = teamContext;
  const { modal } = modalContext;

  const onLogout = () => {
    logoutUser();
    clearMembers();
    clearTeams();
  };

  const authLinks = (
    <Fragment>
      <li>Welcome {user && user.name}!</li>
      <li>
        {!modal && (
          <a href='#!' onClick={onLogout}>
            <i
              className='fa fa-sign-out'
              style={{ color: '#fff', marginRight: 5 }}
            ></i>
            <span className={styles.hide}>Logout</span>
          </a>
        )}
      </li>
    </Fragment>
  );

  const guessLinks = !modal && (
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
    <div className={modal ? styles.NavBarBlurry : styles.NavBar}>
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
  icon: PropTypes.string,
};

NavBar.defaultProps = {
  title: 'Team Manager',
  icon: 'fa fa-users fa-lg',
};

export default NavBar;
