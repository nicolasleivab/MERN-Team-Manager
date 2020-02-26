import React, { Fragment, useContext } from 'react';
import MemberContext from '../../context/member/memberContext';
import MemberItem from '../MemberItem/MemberItem';
import styles from './Members.module.css';

const Members = props => {
  const memberContext = useContext(MemberContext);

  const { members } = memberContext;
  return (
    <Fragment>
      <div className={styles.gridContainer}>
        <p>
          <strong>Name</strong>
        </p>{' '}
        <p>
          <strong>Email</strong>
        </p>{' '}
        <p>
          <strong>Role</strong>
        </p>
      </div>
      {members.map(member => (
        <MemberItem member={member} />
      ))}
    </Fragment>
  );
};

export default Members;
