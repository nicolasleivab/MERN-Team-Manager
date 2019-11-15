import React from 'react';

const person = (props) => {
    return <div>
    <p onClick={props.click}>I'm {props.name} and I'm {props.age} years old.</p>
    <p>{props.children}</p>
    <input type="text" onChange={props.inputName} value={props.name}/>{/*Two way binding to display default names in input*/}
    </div>
}

export default person;