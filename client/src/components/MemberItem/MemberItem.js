import React, { useContext } from "react";
import MemberContext from "../../context/member/memberContext";
import styles from "./MemberItem.module.css";

const MemberItem = ({ member }) => {
  const memberContext = useContext(MemberContext);
  const { deleteMember, setCurrent, clearCurrent } = memberContext;

  const { name, email, phone, role } = member;
  const conditions = [
    "CEO",
    "CTO",
    "LEAD",
    "PRINCIPAL",
    "MAIN",
    "MANAGER",
    "OWNER",
    "PRESIDENT",
  ];

  const removeMember = () => {
    deleteMember(member);
    clearCurrent();
  };

  return (
    <div className={styles.gridContainer}>
      <p style={{ color: "#555" }}>{name}</p>
      <p style={{ fontSize: "1.4rem" }}>{email}</p>

      <p style={{ fontSize: "1.4rem" }}>{phone}</p>
      <p style={{ color: "#fff" }}>{role}</p>

      <button className={styles.btnBlue} onClick={() => setCurrent(member)}>
        Edit
      </button>
      <button
        className={styles.btnRed}
        style={{ marginLeft: 7 }}
        onClick={removeMember}
      >
        Delete
      </button>
    </div>
  );
};

export default MemberItem;
