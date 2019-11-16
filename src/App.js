import React, { Component } from 'react';
import './App.scss';
import Person from './Person/Person';

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
        {this.state.persons.map((person, index) =>{
          return <Person
            name={person.name}
            age={person.age}
            key={person.id} //assign unique identifier
            click={()=>this.removePersonHandler(index)} //()=> or use bind to pass index
            inputName={(event)=>this.newNameHandler(event, person.id)}/>
            
      }
    )}   
    </div>
  )
  }
    return(
    <div className="App">
      <h1>Single Page React App</h1>
      <button className="btn-dark-gray" onClick={this.togglePersonHandler}>Toggle Persons</button>
      {persons} {/*output persons*/}
    </div>
)}
};

export default App;
