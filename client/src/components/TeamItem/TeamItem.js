import React, { useContext, useEffect, useState, Fragment } from "react";
import TeamContext from "../../context/team/teamContext";
import EditIcon from "@material-ui/icons/Edit";
import DeleteIcon from "@material-ui/icons/Delete";
import Tooltip from "@material-ui/core/Tooltip";
import styles from "./TeamItem.module.css";

const TeamItem = ({ team, editTeam, removeTeam }) => {
  const teamContext = useContext(TeamContext);

  const { setCurrentTeam, currentTeam } = teamContext;

  const { _id, name } = team;

  const [isActive, setActive] = useState("");

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
        href="#!"
        onClick={teamHandler}
        className={_id === isActive ? styles.activeTeam : styles.inactiveTeam}
      >
        {name}
      </a>
      {_id === isActive && (
        <Fragment>
          <Tooltip title="Edit Team" placement="bottom-center">
            <EditIcon
              fontSize="small"
              onClick={editTeam}
              style={{ marginLeft: 30, cursor: "pointer" }}
            />
          </Tooltip>
          <Tooltip title="Delete Team" placement="bottom-center">
            <DeleteIcon
              fontSize="small"
              onClick={removeTeam}
              style={{ marginLeft: 15, cursor: "pointer" }}
            />
          </Tooltip>
        </Fragment>
      )}
    </div>
  );
};

export default TeamItem;
