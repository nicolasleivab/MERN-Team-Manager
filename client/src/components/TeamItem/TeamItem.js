import React, { useContext, useEffect, useState } from 'react';
import TeamContext from '../../context/team/teamContext';
import styles from './TeamItem.module.css';

const TeamItem = ({ team }) => {
  const teamContext = useContext(TeamContext);

  const { setCurrentTeam, currentTeam } = teamContext;

  const { _id, name } = team;

  const [isActive, setActive] = useState('');

  useEffect(() => {
    if (currentTeam !== null) {
      setActive(currentTeam._id);
    }
  }, [currentTeam]);

  const teamHandler = () => {
    setCurrentTeam(team);
  };

  return (
    <div className={styles.TeamItem}>
      <a
        href='#!'
        onClick={teamHandler}
        className={_id === isActive ? styles.activeTeam : styles.inactiveTeam}
      >
        {name}
      </a>
    </div>
  );
};

export default TeamItem;
