import React from 'react';
import Members from '../../components/Members/Members';
import styles from './Home.module.css';

const Home = props => {
  return (
    <div className={styles.Home}>
      <Members />
    </div>
  );
};

export default Home;
