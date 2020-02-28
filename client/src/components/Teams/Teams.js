import React, { Fragment, useContext, useEffect } from 'react';
import MemberContext from '../../context/member/memberContext';
import MemberItem from '../MemberItem/MemberItem';

import React from 'react';

const Teams = () => {
  const memberContext = useContext(MemberContext);

  const { members, filtered, getMembers, loading } = memberContext;

  useEffect(() => {
    //getTeams();
    // eslint-disable-next-line
  }, []);
  return <div></div>;
};

export default Teams;
