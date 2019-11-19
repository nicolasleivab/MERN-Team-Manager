import React from 'react';

const person = (props) => {
    return <div className="Person">
    {!props.editInputs ?
    <div>
    <button className="btn btn--rect btn--dark-gray" onClick={props.showInputs}>edit</button>
    </div>:
    <div>
    <button className="btn btn--rect btn--green" onClick={props.showInputs}>save</button>
    </div>}
    <div className="container">
    <div className="text text-item--1">{props.name}</div>
    <div className="text text-item--2">{props.email}</div>
    <div className="text text-item--3">{props.role}</div>
    </div>
    {props.editInputs ?
    <div className="container">
    <input type="text" onChange={props.inputName} value={props.name} maxLength='50'/>
    <input type="text" onChange={props.inputMail} value={props.email} maxLength='50' type="email"/>
    <input type="text" onChange={props.inputRole} value={props.role} maxLength='50'/>
    </div> : null
    }
    <div>
    <button className="btn btn--red" onClick={props.click}>-</button></div>
    </div> 
    
}

export default person;