import React, { useContext, useEffect, useState } from 'react';
import TeamContext from '../../context/team/teamContext';
import styles from './TeamItem.module.css';

const TeamItem = ({ team }) => {
  const teamContext = useContext(TeamContext);

  const { setCurrentTeam } = teamContext;

  const { _id, name } = team;

  const teamHandler = () => {
    setCurrentTeam(team);
  };

  return (
    <div className={styles.TeamItem}>
      <a href='#!' onClick={teamHandler}>
        {team.name}
      </a>
    </div>
  );
};

export default TeamItem;
