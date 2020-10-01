import React from 'react';
import './Person.css'
const person = (props) =>{
return (
    <div className="Person">
        <p>I'm a person, my name is {props.name}, and I'm {props.age} years old</p>
    </div>
    )
}

export default person;