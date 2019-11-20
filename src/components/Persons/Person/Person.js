import React from 'react';

const person = (props) => {
    return <div className="Person">
    {props.editInputs ?
    <div className="container">
    <div><button className="btn btn--rect btn--green" onClick={props.showInputs}>save</button></div>
    <input onChange={props.inputName} value={props.name} maxLength='50'/>
    <input onChange={props.inputMail} value={props.email} maxLength='50' type="email"/>
    <input onChange={props.inputRole} value={props.role} maxLength='50'/>
    <div><button className="btn btn--red" onClick={props.click}>-</button></div>
    </div> :    <div className="container">
    <div><button className="btn btn--rect btn--dark-gray" onClick={props.showInputs}>edit</button></div>
    <div className="text">{props.name}</div>
    <div className="text">{props.email}</div>
    <div className="text">{props.role}</div>
    <div><button className="btn btn--red" onClick={props.click}>-</button></div>
    </div>
    }
    
    </div>
    
}

export default person;