import React, { useContext, useEffect, Fragment } from 'react';
import Members from '../../components/Members/Members';
import Teams from '../../components/Teams/Teams';
import MemberForm from '../../components/MemberForm/MemberForm';
import styles from './Home.module.css';
import AuthContext from '../../context/auth/authContext';

const Home = () => {
  const authContext = useContext(AuthContext);

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  if (!authContext.isAuthenticated) {
    return <Fragment></Fragment>;
  }
  return (
    <div className={styles.gridContainer}>
      <div>
        <Teams />
      </div>
      <div className={styles.MemberForm}>
        <MemberForm />
      </div>
      <div className={styles.Members}>
        <Members />
      </div>
    </div>
  );
};

export default Home;
