import React, { Fragment, useContext, useEffect } from 'react';
import TeamContext from '../../context/team/teamContext';

import React from 'react';

const Teams = () => {
  const memberContext = useContext(MemberContext);

  const { teams, getTeams } = memberContext;

  useEffect(() => {
    //getTeams();
    // eslint-disable-next-line
  }, []);
  return <div></div>;
};

export default Teams;
