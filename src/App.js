import React, { Component } from 'react';
import './App.scss';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons : [
      {name:"Wojak", age:25},
      {name:"Sminem", age:17},
      {name:"Bogdanoff", age:52}
    ],
    secondProp: 'some value',
    showPersons: false
  };

  removePersonHandler = (personIndex)=>{
    const persons = this.state.persons;
    persons.splice(personIndex, 1);
    //DON'T do this: this.state.persons = persons;
    this.setState({ //instead use this method included in the Component
      persons: persons 
    })
    console.log(this.state); //props you don't target won't change (they merge)  
                            //using hooks is different, the old state is replaced by the new one
  }
  newNameHandler = (event)=>{
    this.setState({ 
      persons: [ 
        {name: "Wojak", age:33},
        {name: event.target.value, age:17}, //target.value for the input value
        {name: "Bogdanoff", age:77}
      ]
  })                        
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
            click={()=>this.removePersonHandler(index)}/> //()=> or use bind to pass index
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
