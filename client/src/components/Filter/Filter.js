import React, { useContext, useState, useEffect } from "react";
import MemberContext from "../../context/member/memberContext";

const Filter = () => {
  const memberContext = useContext(MemberContext);
  const { filterMembers, clearFilter, filtered } = memberContext;
  const [text, setText] = useState("");

  useEffect(() => {
    if (filtered === null) {
      setText("");
    }
  }, [filtered]);

  const onChange = (e) => {
    setText(e.target.value);
    filterMembers(e.target.value);
    if (e.target.value === "") {
      clearFilter();
    }
  };

  return (
    <div>
      <input
        type="text"
        value={text}
        placeholder="Filter members..."
        onChange={onChange}
      />
    </div>
  );
};

export default Filter;
