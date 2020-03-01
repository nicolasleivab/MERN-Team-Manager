import React, { Fragment, useContext, useEffect, useState } from 'react';
import TeamContext from '../../context/team/teamContext';
import TeamItem from '../../components/TeamItem/TeamItem';
import styles from './Teams.module.css';

const Teams = props => {
  const teamContext = useContext(TeamContext);

  const {
    teams,
    getTeams,
    setCurrentTeam,
    clearCurrentTeam,
    addTeam
  } = teamContext;

  useEffect(() => {
    getTeams();

    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (teams.length > 0) {
      setCurrentTeam(teams[0]);
    }
  }, [teams]);

  const [team, setTeam] = useState({
    name: ''
  });

  const { name } = team;

  const onChange = e => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    addTeam(team);
    setCurrentTeam(team);
  };

  return (
    <div style={{ paddingTop: 100 }}>
      <form className={styles.formContainer} onSubmit={onSubmit}>
        <p>Add Team</p>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          required='required'
          onChange={onChange}
        />
        <input type='submit' value={'Add Team'} className={styles.btnBlue} />
        {/*current && (
            <input
              type='submit'
              value='Clear'
              className={styles.btnGray}
              onClick={() => clearCurrentTeam()}
            />
          )*/}
      </form>
      <div className={styles.formContainer}>
        {teams.length > 0 &&
          teams.map(team => <TeamItem team={team} key={team._id} />)}
      </div>
    </div>
  );
};

export default Teams;
