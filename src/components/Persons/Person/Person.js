import React from 'react';

const person = (props) => {
    return <div className="Person">
    <p>I'm {props.name} and I'm {props.role}.</p>
    <input type="text" onChange={props.inputName} value={props.name}/>{/*Two way binding to display default names in input*/}
    <input type="text" onChange={props.inputRole} value={props.role}/>
    <button className="btn btn--red" onClick={props.click}>-</button>
    </div>
}

export default person;