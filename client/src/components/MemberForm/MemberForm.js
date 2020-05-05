import React, { useState, useContext, useEffect, Fragment } from "react";
import MemberContext from "../../context/member/memberContext";
import TeamContext from "../../context/team/teamContext";
import ModalContext from "../../context/modal/modalContext";
import styles from "./MemberForm.module.css";

const MemberForm = () => {
  const memberContext = useContext(MemberContext);
  const teamContext = useContext(TeamContext);
  const modalContext = useContext(ModalContext);

  const {
    addMember,
    current,
    clearCurrent,
    updateMember,
    filtered,
    filterMembers,
    clearFilter,
  } = memberContext;

  const { currentTeam } = teamContext;

  const { modal, setModal, hideModal } = modalContext;

  useEffect(() => {
    if (current !== null) {
      setMember(current);
    } else {
      setMember({
        name: "",
        email: "",
        phone: "",
        role: "",
        team: "",
      });
    }
  }, [memberContext, current]);

  const [member, setMember] = useState({
    name: "",
    email: "",
    phone: "",
    role: "",
    team: "",
  });
  const { name, email, phone, role } = member;

  const onChange = (e) => {
    setMember({ ...member, [e.target.name]: e.target.value });
  };

  const onSubmit = (e) => {
    e.preventDefault();
    //assign current team
    member.team = currentTeam._id;
    //defaut role
    if (member.role === "") {
      member.role = "Developer";
    }
    //call methods from context conditionally
    if (current !== null) {
      updateMember(member);
      if (filtered !== null) {
        updateMember(filtered);
        filterMembers(filtered.find((el) => el.name === member.name).name);
        console.log(member);
        hideModal();
      }
    } else {
      addMember(member);
      console.log(member);
      clearFilter();
      hideModal();
    }
    //reset form
    clearCurrent();
    hideModal();
  };
  return (
    <Fragment>
      {modal && (
        <div className={styles.MemberForm}>
          <form className={styles.formContainer} onSubmit={onSubmit}>
            <p>{current ? "Edit Team Member" : "Add Team Member"}</p>
            <input
              type="text"
              placeholder="Name"
              name="name"
              value={name}
              required="required"
              onChange={onChange}
              maxLength={35}
            />
            <input
              type="email"
              placeholder="Email"
              name="email"
              value={email}
              required="required"
              onChange={onChange}
              maxLength={35}
            />
            <input
              type="text"
              placeholder="Phone"
              name="phone"
              value={phone}
              onChange={onChange}
              maxLength={35}
            />
            <input
              type="text"
              placeholder="Role"
              name="role"
              value={role}
              onChange={onChange}
              maxLength={35}
            />
            <input
              type="submit"
              value={current ? "Update Member" : "Add Member"}
              className={styles.mainBtn}
            />
            {current && (
              <input
                type="submit"
                value="Clear"
                className={styles.mainBtnGray}
                onClick={() => clearCurrent()}
              />
            )}
          </form>
        </div>
      )}
    </Fragment>
  );
};

export default MemberForm;
