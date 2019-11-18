import React, { Component } from 'react';
import './App.scss';
import Persons from '../components/Persons/Persons';

class App extends Component {
  state = {
    persons : [
      {id: 1, name:"Wojak", role:"CTO"},
      {id: 2, name:"Sminem", role:"Tech Lead"},
      {id: 3, name:"Bogdanoff", role:"Developer"}
    ],
    secondProp: 'some value',
    personID: 4
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

  addPersonHandler = ()=>{
    let currentID = this.state.personID;
    const persons = [...this.state.persons];
    persons.push({id: currentID, name:"Wojak", role:"Developer"});
    //DON'T do this: this.state.persons = persons;
    currentID++;
    this.setState({ //instead use this method included in the Component
      persons: persons,
      personID: currentID
    })
    console.log(this.state);
  }

  //changing state and props are the few things that make react to update the DOM!
  render() {
  let persons = null;

  
    persons = (
    <div>
        <Persons 
        persons={this.state.persons}
        clicked={this.removePersonHandler}
        changed={this.newNameHandler}
        roleChanged={this.newRoleHandler}/>
    </div>
  )
  
    return(
    <div className="App">
      <h1>Team Builder</h1>
      <button className="btn btn--dark-gray">Export Team</button>
      {persons} {/*output persons*/}
      <button className="btn btn--dark-gray" onClick={this.addPersonHandler}>+</button>
      
    </div>
)}
};

export default App;
