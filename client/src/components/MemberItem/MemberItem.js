import React, { useContext } from 'react';
import MemberContext from '../../context/member/memberContext';
import styles from './MemberItem.module.css';

const MemberItem = ({ member }) => {
  const memberContext = useContext(MemberContext);
  const { deleteMember, setCurrent, clearCurrent } = memberContext;

  const { name, email, phone, role } = member;
  const conditions = [
    'CEO',
    'CTO',
    'LEAD',
    'PRINCIPAL',
    'MAIN',
    'MANAGER',
    'OWNER',
    'PRESIDENT'
  ];

  const removeMember = () => {
    deleteMember(member);
    clearCurrent();
  };

  return (
    <div className={styles.cardDark}>
      <div className={styles.flexContainer}>
        <p style={{ color: '#003d66', fontWeight: 700 }}>{name}</p>
        <div className={styles.flexIcon}>
          <i className='fa fa-envelope-open'></i>
          <p style={{ fontSize: '1.4rem', marginLeft: 5 }}>{email}</p>
        </div>
        <div className={styles.flexIcon}>
          <i className='fa fa-phone'></i>
          <p style={{ fontSize: '1.4rem', marginLeft: 5 }}>{phone}</p>
        </div>
        <div className={styles.flexIcon}>
          <button className={styles.btnBlue} onClick={() => setCurrent(member)}>
            Edit
          </button>
          <button
            className={styles.btnRed}
            style={{ marginLeft: 7 }}
            onClick={removeMember}
          >
            Delete
          </button>
        </div>
      </div>
      <div
        className={
          conditions.some(el => role.toUpperCase().includes(el))
            ? styles.badgeGreen
            : styles.badgeBlue
        }
      >
        <p style={{ color: '#fff' }}>{role}</p>
      </div>
    </div>
  );
};

export default MemberItem;
