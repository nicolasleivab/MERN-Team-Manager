import React from 'react';
import Members from '../../components/Members/Members';
import MemberForm from '../../components/MemberForm/MemberForm';
import styles from './Home.module.css';
import MemberItem from '../../components/MemberItem/MemberItem';

const Home = () => {
  return (
    <div className={styles.gridContainer}>
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
