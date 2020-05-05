import React, { Fragment, useContext, useEffect, useState } from "react";
import MemberContext from "../../context/member/memberContext";
import TeamContext from "../../context/team/teamContext";
import MemberItem from "../MemberItem/MemberItem";
import Filter from "../../components/Filter/Filter";
import styles from "./Members.module.css";
import PropTypes from "prop-types";

const Members = (props) => {
  const memberContext = useContext(MemberContext);
  const teamContext = useContext(TeamContext);

  const { members, filtered, getMembers, loading } = memberContext;
  const { currentTeam } = teamContext;

  const [membersByTeam, setMembersByTeam] = useState([]);

  useEffect(() => {
    getMembers();
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    //filter membrs by current team
    if (currentTeam !== null && members !== null) {
      const filteredMem = members.filter(
        (member) => member.team === currentTeam._id
      );
      setMembersByTeam(filteredMem);
    }
  }, [currentTeam, members]);

  return (
    <Fragment>
      {members !== null && !loading ? (
        <div className={styles.flexContainer}>
          <Filter />
          {filtered !== null
            ? filtered.map((member) => (
                <MemberItem member={member} key={member._id} />
              ))
            : membersByTeam.map((member) => (
                <MemberItem member={member} key={member._id} />
              ))}
          {membersByTeam.length === 0 && (
            <p className={styles.alertText}>Please add a member</p>
          )}
          {filtered !== null && filtered.length === 0 && (
            <p className={styles.alertText}>No match found...</p>
          )}
        </div>
      ) : (
        <div>loading</div>
      )}
    </Fragment>
  );
};

MemberItem.propTypes = {
  member: PropTypes.object.isRequired,
};

export default Members;
