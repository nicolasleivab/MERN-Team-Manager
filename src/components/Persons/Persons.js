import React from 'react';
import Person from './Person/Person';

const persons = (props) => props.persons.map( (persons, index) =>{
        return <Person
          name={persons.name}
          role={persons.role}
          email={persons.email}
          key={persons.id} //assign unique identifier
          click={()=>props.clicked(index)} //()=> or use bind to pass index
          showInputs={()=>props.showInputsClick(persons.id)}
          editInputs={persons.editInputs}
          inputName={(event)=>props.changed(event, persons.id)}
          inputRole={(event)=>props.roleChanged(event, persons.id)}
          inputMail={(event)=>props.mailChanged(event, persons.id)}/>
              
});

export default persons;