import React, { Fragment, useContext, useEffect, useState } from "react";
import MemberContext from "../../context/member/memberContext";
import TeamContext from "../../context/team/teamContext";
import MaterialTable from "material-table";

export default function MaterialTableDemo() {
  const memberContext = useContext(MemberContext);
  const teamContext = useContext(TeamContext);

  const { members, getMembers, loading } = memberContext;
  const { currentTeam } = teamContext;
  const [membersByTeam, setMembersByTeam] = useState([]);

  useEffect(() => {
    getMembers();
    // eslint-disable-next-line
  }, []);

  const [state, setState] = useState({
    columns: [
      { title: "Name", field: "name" },
      { title: "Email", field: "email" },
      { title: "Phone", field: "phone" },
      {
        title: "role",
        field: "role",
      },
    ],
    data: [],
  });

  useEffect(() => {
    //filter membrs by current team
    if (currentTeam !== null && members !== null) {
      const filteredMem = members.filter(
        (member) => member.team === currentTeam._id
      );
      setMembersByTeam(filteredMem);
      const dataToPass = [];
      filteredMem.map((member) => {
        dataToPass.push({
          name: member.name,
          email: member.email,
          phone: member.phone,
          role: member.role,
        });
      });
      const columns = [...state.columns];
      setState({ columns: columns, data: dataToPass });
      console.log(dataToPass);
    }
  }, [currentTeam, members]);

  return (
    <MaterialTable
      title="Editable Example"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              if (oldData) {
                setState((prevState) => {
                  const data = [...prevState.data];
                  data[data.indexOf(oldData)] = newData;
                  return { ...prevState, data };
                });
              }
            }, 600);
          }),
        onRowDelete: (oldData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.splice(data.indexOf(oldData), 1);
                return { ...prevState, data };
              });
            }, 600);
          }),
      }}
    />
  );
}
