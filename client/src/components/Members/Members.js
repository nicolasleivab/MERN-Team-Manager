import React, { Fragment, useContext, useEffect } from 'react';
import MemberContext from '../../context/member/memberContext';
import MemberItem from '../MemberItem/MemberItem';
import Filter from '../../components/Filter/Filter';
import styles from './Members.module.css';
import PropTypes from 'prop-types';

const Members = props => {
  const memberContext = useContext(MemberContext);

  const { members, filtered, getMembers, loading } = memberContext;

  useEffect(() => {
    getMembers();
    // eslint-disable-next-line
  }, []);

  return (
    <Fragment>
      {members !== null && !loading ? (
        <div className={styles.flexContainer}>
          <Filter />
          {filtered !== null
            ? filtered.map(member => (
                <MemberItem member={member} key={member._id} />
              ))
            : members.map(member => (
                <MemberItem member={member} key={member._id} />
              ))}
          {members.length === 0 && <p>Please add a member</p>}
          {filtered !== null && filtered.length === 0 && (
            <p>No match found...</p>
          )}
        </div>
      ) : (
        <div>loading</div>
      )}
    </Fragment>
  );
};

MemberItem.propTypes = {
  member: PropTypes.object.isRequired
};

export default Members;
