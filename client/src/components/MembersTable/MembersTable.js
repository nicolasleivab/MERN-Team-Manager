import React, { Fragment, useContext, useEffect, useState } from 'react';
import MemberContext from '../../context/member/memberContext';
import TeamContext from '../../context/team/teamContext';
import ModalContext from '../../context/modal/modalContext';
import MaterialTable from 'material-table';

export default function MembersTable() {
  const memberContext = useContext(MemberContext);
  const teamContext = useContext(TeamContext);
  const modalContext = useContext(ModalContext);

  const {
    members,
    getMembers,
    loading,
    current,
    setCurrent,
    clearCurrent,
    deleteMember,
  } = memberContext;
  const { currentTeam } = teamContext;
  const { modal, setModal, hideModal } = modalContext;

  const [membersByTeam, setMembersByTeam] = useState([]);

  useEffect(() => {
    getMembers();
    // eslint-disable-next-line
  }, []);

  const [state, setState] = useState({
    columns: [
      {
        title: '#',
        field: '_id',
        render: (rowData) => <div>{rowData.tableData.id + 1}</div>,
      },
      { title: 'Name', field: 'name' },
      { title: 'Email', field: 'email' },
      { title: 'Phone', field: 'phone' },
      {
        title: 'Role',
        field: 'role',
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
          _id: member._id,
        });
      });
      const columns = [...state.columns];
      setState({
        columns: columns,
        data: dataToPass,
      });
      console.log(currentTeam);
      console.log(dataToPass);
    }
  }, [currentTeam, members]);

  const setUpdate = (member) => {
    setCurrent(member);
    window.location.href = '#';
    setModal();
  };
  const setAddMember = () => {
    window.location.href = '#';
    setModal();
  };

  return (
    <MaterialTable
      title={currentTeam && currentTeam.name}
      columns={modal ? [] : state.columns}
      data={modal ? [] : state.data}
      options={{ search: !modal }}
      body={state.body}
      style={{ padding: 10 }}
      localization={{
        body: {
          emptyDataSourceMessage: 'Please add a member',
        },
      }}
      actions={
        modal
          ? []
          : [
              {
                icon: 'edit',
                tooltip: 'Edit Member',
                onClick: (event, rowData) => setUpdate(rowData),
              },
              {
                icon: 'delete',
                tooltip: 'Delete Member',
                onClick: (event, rowData) => deleteMember(rowData),
              },
              {
                icon: 'add',
                tooltip: 'Add Member',
                isFreeAction: true,
                onClick: () => setAddMember(),
              },
            ]
      }
    />
  );
}
