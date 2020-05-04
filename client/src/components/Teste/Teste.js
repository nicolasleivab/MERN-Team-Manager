import React, { Fragment, useState, useEffect, useContext } from "react";
import { TextField } from "@material-ui/core";

function Teste() {
  const [currentProject, setProject] = useState("");

  const onChange = e => {
    setProject(e.target.value);
  };

  return (
    <div>
      <input
        type="password"
        placeholder="Password"
        name="password"
        value={currentProject}
        required="required"
        onChange={onChange}
        maxLength={35}
      />
    </div>
  );
}

export default Teste;
