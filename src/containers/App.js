import React, { Component } from 'react';
import './App.scss';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

class App extends Component {
  state = {
    persons : [
      {id: 1, name:"Wojak", age:25},
      {id: 2, name:"Sminem", age:17},
      {id: 3, name:"Bogdanoff", age:52}
    ],
    secondProp: 'some value',
    showPersons: false
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

  

  togglePersonHandler = ()=>{
    const flagPersons = this.state.showPersons; //toggle flag
    this.setState({showPersons: !flagPersons})
    console.log(this.state);
  }

  //changing state and props are the few things that make react to update the DOM!
  render() {
  let persons = null;

  if (this.state.showPersons){ //normal JS code in render
    persons = (
    <div>
        <Persons 
        persons={this.state.persons}
        clicked={this.removePersonHandler}
        changed={this.newNameHandler}/>
    </div>
  )
  }
    return(
    <div className="App">
      <Cockpit
      persons={this.state.persons}
      toggle={this.togglePersonHandler}
      />
      {persons} {/*output persons*/}
    </div>
)}
};

export default App;
