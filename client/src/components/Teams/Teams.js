import React, { Fragment, useContext, useEffect, useState } from 'react';
import TeamContext from '../../context/team/teamContext';
import MemberForm from '../../components/MemberForm/MemberForm';
import styles from './Teams.module.css';
const Teams = () => {
  const teamContext = useContext(TeamContext);

  const { teams, getTeams, setCurrentTeam } = teamContext;

  useEffect(() => {
    getTeams();

    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (teams.length > 0) {
      setCurrentTeam(teams[1]);
    }
  }, [teams]);

  const [team, setTeam] = useState({
    name: ''
  });

  return (
    <Fragment>
      <div style={{ paddingTop: 100 }}>
        {/*
        <form className={styles.formContainer} onSubmit={onSubmit}>
          <p>{current ? 'Edit Team Member' : 'Add Team Member'}</p>
          <input
            type='text'
            placeholder='Name'
            name='name'
            value={name}
            required='required'
            onChange={onChange}
          />
          <input
            type='submit'
            value={current ? 'Update Member' : 'Add Member'}
            className={current ? styles.btnGreen : styles.btnBlue}
          />
          {current && (
            <input
              type='submit'
              value='Clear'
              className={styles.btnGray}
              onClick={() => clearCurrent()}
            />
          )}
        </form>*/}

        {teams.length > 0 && teams.map(team => <p>{team.name}</p>)}
      </div>
    </Fragment>
  );
};

export default Teams;
