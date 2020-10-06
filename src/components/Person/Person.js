import React from 'react';
import './Person.css'
const person = (props) =>{
return (
    <div className="Person">
        <p>I'm a person, my name is {props.name}, and I'm {props.age} years old</p>
        new name: <input type="text" onChange={props.change}></input>
        <div></div>
        <button onClick={props.delete}>Delete</button>
    </div>
    )
}

export default person;