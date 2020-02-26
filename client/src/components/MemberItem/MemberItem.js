import React from 'react';
import styles from './MemberItem.module.css';

const MemberItem = ({ member }) => {
  const { id, name, email, phone, role } = member;
  return (
    <div className={styles.cardDark}>
      <div className={styles.gridContainer}>
        <p>{name}</p>
        <p>{email}</p>
        <p>{role}</p>
      </div>
    </div>
  );
};

export default MemberItem;
