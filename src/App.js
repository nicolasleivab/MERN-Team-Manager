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
    secondProp: 'some value'
  };

  changeNameHandler = ()=>{
    //DON'T do this: this.state.persons[0].name = "Frojack";
    this.setState({ //instead use this method included in the Component
      persons: [  //selected prop must contain same amount of elements
        {name:"Frojack", age:33},
        {name:"Sminem", age:17},
        {name:"Bogdanoff", age:77}
      ]
    })
    console.log(this.state); //props you don't target won't change
  }
  //changing state and props are the few things that make react to update the DOM!
  render() {
    return(
    <div className="App">
      <h1>Single Page React App</h1>
      <button onClick={this.changeNameHandler}>Change name</button>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>I hate Bitcoin.</Person>
      <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>I like Bitcoin.</Person>
      <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>I like Bitcoin.</Person>
    </div>
)}
};

export default App;
