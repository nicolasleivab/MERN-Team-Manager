import React, { Component } from 'react';
import './App.scss';
import Persons from '../components/Persons/Persons';
import jsPDF from 'jspdf';
import 'jspdf-autotable'

const storedState = JSON.parse( localStorage.getItem('pastState'));
const storedID = JSON.parse( localStorage.getItem('pastID'));
/*let input = document.getElementsByTagName("INPUT");
// trigger submit button when pressing enter key
input.addEventListener("keyup", function(event) {
  // 13 = enter key
  if (event.keyCode === 13) {
    // cancel default action
    event.preventDefault();
    // trigger button element
    document.getElementsByTagName("BUTTON").click();
  }
});*/

class App extends Component {
  state = {
   persons : storedState || [
      {id: 1, name:"Wojak", email:"wojak@mail.com", role:"CTO", editInputs: false},
      {id: 2, name:"Sminem", email:"sminem@mail.com", role:"Tech Lead", editInputs: false},
      {id: 3, name:"Bogdanoff", email:"bodanoff@mail.com", role:"Developer", editInputs: false}
    ],
    secondProp: 'some value',
    personID: storedID || 4
  };
    
  removePersonHandler = (personIndex)=>{
    //we create a copy of the array to avoid unpredictable behaviours
    //***always update state in an immutable fashion
    //const persons = this.state.persons.slice(); //or
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    //DON'T do this: this.state.persons = persons;
    this.setState({ //instead use this method included in the Component
      persons: persons 
    })
    console.log(this.state); //props you don't target won't change (they merge)  
                            //using hooks is different, the old state is replaced by the new one
  }
  newNameHandler = (event, id)=>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]//get the person with the index (first make a copy)
    };
    //or const person = Object.assign({}, this.state.persons[personIndex])
    person.name = event.target.value;

    const persons = [...this.state.persons]; //update array at personIndex position
    persons[personIndex] = person;
    
    this.setState({persons: persons});                       
}

newRoleHandler = (event, id)=>{
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]//get the person with the index (first make a copy)
  };
  //or const person = Object.assign({}, this.state.persons[personIndex])
  person.role = event.target.value;

  const persons = [...this.state.persons]; //update array at personIndex position
  persons[personIndex] = person;
  
  this.setState({persons: persons});                       
}

newMailHandler = (event, id)=>{
  const personIndex = this.state.persons.findIndex(p => {
    return p.id === id;
  });

  const person = {
    ...this.state.persons[personIndex]//get the person with the index (first make a copy)
  };
  //or const person = Object.assign({}, this.state.persons[personIndex])
  person.email = event.target.value;

  const persons = [...this.state.persons]; //update array at personIndex position
  persons[personIndex] = person;
  
  this.setState({persons: persons});                       
}

  addPersonHandler = ()=>{
    let currentID = this.state.personID;
    const persons = [...this.state.persons];
    persons.push({id: currentID, name:"Wojak", email:"wojak@mail.com", role:"Developer", editInputs: false});
    //DON'T do this: this.state.persons = persons;
    currentID++;
    this.setState({ //instead use this method included in the Component
      persons: persons,
      personID: currentID
    })
    console.log(this.state);
  }
  //export team to pdf in a table with jsPDF
  exportPdf = ()=>{
    const doc = new jsPDF(),
    col = ["Name","Email","Role"],
    rows = [],
    persons = [...this.state.persons];//copy of persons array

    persons.forEach(element => {      
      const tableRow= [element.name, element.email, element.role];
        rows.push(tableRow);

    });        
     doc.autoTable(col, rows, { startY: 10 });
     doc.save('Team.pdf');
 }

 saveToLocal = ()=>{
  const personsLocal = [...this.state.persons];
  const currentID = this.state.personID;
  localStorage.setItem('pastState', JSON.stringify(personsLocal));
  localStorage.setItem('pastID', JSON.stringify(currentID));
}

  showInputs = (id)=>{
    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });
    const person = {
      ...this.state.persons[personIndex]//get the person with the index (first make a copy)
    };
    let personFlag = person.editInputs;//edit and save behaviour
    person.editInputs = !personFlag;
    const persons = [...this.state.persons]; //update array at personIndex position
    persons[personIndex] = person;
    this.setState({persons: persons});
  }

  keyCodeHandler = (event, id)=>{
    if (event.keyCode === 13) {
      // cancel default action
      event.preventDefault();
      // trigger showInputs on enter key for the current id
      this.showInputs(id);
    }
  }
 
  //changing state and props are the few things that make react to update the DOM!
  render() {
  let persons = null;
  this.saveToLocal();

    persons = (
    <div>
        <Persons 
        persons={this.state.persons}
        clicked={this.removePersonHandler}
        changed={this.newNameHandler}
        roleChanged={this.newRoleHandler}
        mailChanged={this.newMailHandler}
        showInputsClick={this.showInputs}
        editInputs={this.state.editInputs}
        nameKeyHandler={this.keyCodeHandler}
        mailKeyHandler={this.keyCodeHandler}
        roleKeyHandler={this.keyCodeHandler}/>
    </div>
  )

  return(
    <div className="App">
      <h1>Team Builder</h1>
      <button className="btn btn--dark-gray" onClick={this.exportPdf}>Export Team</button>
      <div className="Person">
      <div className="container">
      <div className="filler"></div>
      <div className="text text--item">Name</div>
      <div className="text text--item">Email</div>
      <div className="text text--item">Role</div>
      <div></div>
      </div>
      </div>
      {persons} {/*output persons*/}
      <button className="btn btn--dark-gray" onClick={this.addPersonHandler}>+</button>
    </div>
)}
};

export default App;
