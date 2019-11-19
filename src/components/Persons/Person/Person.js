import React from 'react';

const person = (props) => {
    return <div className="Person">
    <div className="container">
    <div className="text text-item--1">{props.name}</div>
    <div className="text text-item--2">{props.email}</div>
    <div className="text text-item--3">{props.role}</div>
    </div>
    <input type="text" onChange={props.inputName} value={props.name}/>{/*Two way binding to display default names in input*/}
    <input type="text" onChange={props.inputMail} value={props.email}/>
    <input type="text" onChange={props.inputRole} value={props.role}/>
    
    <button className="btn btn--red" onClick={props.click}>-</button>
    </div>
}

export default person;