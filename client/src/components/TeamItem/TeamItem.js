import React, { useContext, useEffect, useState, Fragment } from 'react';
import TeamContext from '../../context/team/teamContext';
import ModalContext from '../../context/modal/modalContext';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import Tooltip from '@material-ui/core/Tooltip';
import styles from './TeamItem.module.css';

const TeamItem = ({ team, editTeam, removeTeam }) => {
  const teamContext = useContext(TeamContext);
  const modalContext = useContext(ModalContext);

  const { setCurrentTeam, currentTeam } = teamContext;
  const { modal } = modalContext;

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

  const tabIndexProp = modal ? { tabIndex: -1 } : { tabIndex: 0 };

  return (
    <div className={styles.TeamItem}>
      <a
        href='#!'
        onClick={teamHandler}
        className={_id === isActive ? styles.activeTeam : styles.inactiveTeam}
        {...tabIndexProp}
      >
        {name}
      </a>
      {_id === isActive && (
        <Fragment>
          <Tooltip title='Edit Team' placement='bottom-center'>
            <EditIcon
              fontSize='small'
              onClick={editTeam}
              className={styles.actionBtn}
              style={{ marginLeft: 30 }}
              {...tabIndexProp}
            />
          </Tooltip>
          <Tooltip title='Delete Team' placement='bottom-center'>
            <DeleteIcon
              fontSize='small'
              onClick={removeTeam}
              className={styles.actionBtn}
              style={{ marginLeft: 15 }}
              {...tabIndexProp}
            />
          </Tooltip>
        </Fragment>
      )}
    </div>
  );
};

export default TeamItem;
