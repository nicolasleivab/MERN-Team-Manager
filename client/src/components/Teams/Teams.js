import React, { Fragment, useContext, useEffect } from 'react';
import TeamContext from '../../context/team/teamContext';

const Teams = () => {
  const teamContext = useContext(TeamContext);

  const { teams, getTeams, setCurrentTeam } = teamContext;

  useEffect(() => {
    getTeams();

    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (teams.length > 0) {
      setCurrentTeam(teams[0]);
    }
  }, [teams]);

  return (
    <Fragment>
      {teams.length > 0 && teams.map(team => <p>{team.name}</p>)}
    </Fragment>
  );
};

export default Teams;
