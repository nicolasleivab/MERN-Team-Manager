import React, { Fragment, useContext } from 'react';
import MemberContext from '../../context/member/memberContext';
import MemberItem from '../MemberItem/MemberItem';
import Filter from '../../components/Filter/Filter';
import styles from './Members.module.css';
import PropTypes from 'prop-types';

const Members = props => {
  const memberContext = useContext(MemberContext);

  const { members, filtered } = memberContext;
  return (
    <div class={styles.flexContainer}>
      <Filter />
      {filtered !== null
        ? filtered.map(member => <MemberItem member={member} key={member.id} />)
        : members.map(member => <MemberItem member={member} key={member.id} />)}
      {members.length === 0 && <p>Please add a member</p>}
      {filtered !== null && filtered.length === 0 && <p>No match found...</p>}
    </div>
  );
};

MemberItem.propTypes = {
  member: PropTypes.object.isRequired
};

export default Members;
