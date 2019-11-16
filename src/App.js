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

  changeNameHandler = (newName)=>{
    //DON'T do this: this.state.persons[0].name = "Frojack";
    this.setState({ //instead use this method included in the Component
      persons: [  //selected prop must contain same amount of elements
        {name: newName, age:33},
        {name: "Sminem", age:17},
        {name: "Bogdanoff", age:77}
      ]
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
        <Person 
        name={this.state.persons[0].name} 
        age={this.state.persons[0].age}
        click={this.changeNameHandler.bind(this, "Jack")}>I hate Bitcoin.</Person> {/*passing methods as props*/}
        <Person 
        name={this.state.persons[1].name} 
        age={this.state.persons[1].age}
        inputName={this.newNameHandler}>I like Bitcoin.</Person>
        <Person 
        name={this.state.persons[2].name} 
        age={this.state.persons[2].age}>I like Bitcoin.</Person>
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
