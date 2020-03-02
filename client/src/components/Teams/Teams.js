import React, { Fragment, useContext, useEffect, useState } from 'react';
import TeamContext from '../../context/team/teamContext';
import MemberContext from '../../context/member/memberContext';
import TeamItem from '../../components/TeamItem/TeamItem';
import styles from './Teams.module.css';

const Teams = props => {
  const teamContext = useContext(TeamContext);
  const memberContext = useContext(MemberContext);

  const {
    teams,
    getTeams,
    setCurrentTeam,
    clearCurrentTeam,
    addTeam,
    currentTeam,
    updateTeam,
    deleteTeam
  } = teamContext;

  const { members, deleteMember } = memberContext;

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
  const [editting, setEdit] = useState(false);

  const { name } = team;

  const onChange = e => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();
    if (editting) {
      updateTeam(team);
    } else {
      addTeam(team);
    }
    setCurrentTeam(team);

    setTeam({ name: '' });
    setEdit(false);
  };

  const editTeam = () => {
    setTeam(currentTeam);
    setEdit(true);
  };

  const clearTeamEdit = () => {
    setTeam({ name: '' });
    setEdit(false);
  };

  const removeTeam = () => {
    deleteTeam(currentTeam);
    members.map(
      member => member.team === currentTeam._id && deleteMember(member)
    );
    setCurrentTeam(teams[0]);
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
        <input
          type='submit'
          value={editting ? 'Update' : 'Add Team'}
          className={editting ? styles.btnGreen : styles.btnBlue}
        />
        {editting && (
          <input
            type='submit'
            value='Clear'
            className={styles.btnGray}
            onClick={clearTeamEdit}
          />
        )}
      </form>
      <div className={styles.formContainer}>
        {teams.length > 0 &&
          teams.map(team => (
            <TeamItem
              team={team}
              key={team._id}
              editTeam={editTeam}
              removeTeam={removeTeam}
            />
          ))}
      </div>
    </div>
  );
};

export default Teams;
