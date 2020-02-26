import React, { Fragment, useContext } from 'react';
import MemberContext from '../../context/member/memberContext';
import MemberItem from '../MemberItem/MemberItem';
import styles from './Members.module.css';
import PropTypes from 'prop-types';

const Members = props => {
  const memberContext = useContext(MemberContext);

  const { members } = memberContext;
  return (
    <Fragment>
      {members.map(member => (
        <MemberItem member={member} key={member.id} />
      ))}
    </Fragment>
  );
};

MemberItem.propTypes = {
  member: PropTypes.object.isRequired
};

export default Members;
