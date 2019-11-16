import React from 'react';

const cockpit = (props) => {
    let assignedClasses = ['btn btn--dark-gray', 'btn btn--light-gray'];
    //if (this.state.persons.length <= n){classes.push('some class'} (for chaining classes)
    //then className={classes.join(' ')} to convert it to string
    if (props.persons.showPersons){ //normal JS code in render
        assignedClasses = assignedClasses[0]; //toggle between classes;
    
    };
    return (
      <div>
      <h1>Single Page React App</h1>
      <button className={assignedClasses} onClick={props.toggle}>Toggle Persons</button>
      
      </div>
    );
    
};

export default cockpit;