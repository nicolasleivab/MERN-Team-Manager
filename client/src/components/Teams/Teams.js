import React, { useContext, useEffect, useState } from 'react';
import TeamContext from '../../context/team/teamContext';
import MemberContext from '../../context/member/memberContext';
import ModalContext from '../../context/modal/modalContext';
import TeamItem from '../../components/TeamItem/TeamItem';
import styles from './Teams.module.css';

const Teams = (props) => {
  const teamContext = useContext(TeamContext);
  const memberContext = useContext(MemberContext);
  const modalContext = useContext(ModalContext);

  const {
    teams,
    getTeams,
    setCurrentTeam,
    addTeam,
    currentTeam,
    updateTeam,
    deleteTeam,
  } = teamContext;
  const { members, deleteMember } = memberContext;
  const { modal } = modalContext;

  useEffect(() => {
    getTeams();

    // eslint-disable-next-line
  }, []);
  useEffect(() => {
    if (teams.length > 0) {
      setCurrentTeam(teams[0]);
    }
    // eslint-disable-next-line
  }, [teams]);

  const [team, setTeam] = useState({
    name: '',
  });
  const [editting, setEdit] = useState(false);

  const { name } = team;

  const onChange = (e) => {
    setTeam({ ...team, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
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
      (member) => member.team === currentTeam._id && deleteMember(member)
    );
    setCurrentTeam(teams[0]);
  };

  return (
    <div className={styles.Teams}>
      <form className={styles.formContainer} onSubmit={onSubmit}>
        <p>{editting ? 'Edit Team' : 'Create Team'}</p>
        <input
          type='text'
          placeholder='Name'
          name='name'
          value={name}
          required='required'
          onChange={onChange}
          maxLength={50}
          disabled={modal}
        />
        <input
          type='submit'
          value={editting ? 'Update' : 'Add Team'}
          className={styles.mainBtn}
          disabled={modal}
        />
        {editting && (
          <input
            type='submit'
            value='Clear'
            className={styles.mainBtnGray}
            onClick={clearTeamEdit}
            disabled={modal}
          />
        )}
      </form>
      <div className={styles.formContainer}>
        {teams.length > 0 &&
          teams.map((team) => (
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
