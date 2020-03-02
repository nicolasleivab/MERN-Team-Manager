import React, { useContext, useEffect, useState, Fragment } from 'react';
import TeamContext from '../../context/team/teamContext';
import styles from './TeamItem.module.css';

const TeamItem = ({ team, editTeam, removeTeam }) => {
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
      {_id === isActive && (
        <Fragment>
          <i className='fa fa-edit' onClick={editTeam}></i>
          <i className='fa fa-trash' onClick={removeTeam}></i>
        </Fragment>
      )}
    </div>
  );
};

export default TeamItem;
