import React from 'react';
import styles from './About.module.css';

const About = props => {
  return (
    <div className={styles.About}>
      <h2>About this App</h2>
      <p>This is a full stack React app for managing teams.</p>
      <p>
        <strong>Version: </strong>1.0.0
      </p>
    </div>
  );
};

export default About;
