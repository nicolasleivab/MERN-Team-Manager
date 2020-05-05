import React, { useContext, useEffect, Fragment } from "react";
import MembersTable from "../../components/MembersTable/MembersTable";
import Teams from "../../components/Teams/Teams";
import MemberForm from "../../components/MemberForm/MemberForm";
import styles from "./Home.module.css";
import AuthContext from "../../context/auth/authContext";
import TeamContext from "../../context/team/teamContext";
import ModalContext from "../../context/modal/modalContext";

const Home = () => {
  const authContext = useContext(AuthContext);
  const teamContext = useContext(TeamContext);
  const modalContext = useContext(ModalContext);

  const { teams } = teamContext;
  const { modal } = modalContext;

  useEffect(() => {
    authContext.loadUser();
    // eslint-disable-next-line
  }, []);
  if (!authContext.isAuthenticated) {
    return <Fragment></Fragment>;
  }
  return (
    <div className={styles.gridContainer}>
      <div className={modal ? styles.TeamsBlurry : styles.Teams}>
        <Teams />
        {teams.length === 0 && (
          <div className={styles.flexContainer}>
            <p className={styles.alertText}>Please create a team</p>
          </div>
        )}
      </div>
      {teams.length > 0 && (
        <Fragment>
          <div className={styles.MemberForm}>
            <MemberForm />
          </div>
          <div className={modal ? styles.MembersBlurry : styles.Members}>
            <MembersTable />
          </div>
        </Fragment>
      )}
    </div>
  );
};

export default Home;
