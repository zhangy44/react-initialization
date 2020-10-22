import React, { useEffect } from 'react';
import './Person.css';
import PropTypes from 'prop-types';
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

person.propTypes = {
    delete : PropTypes.func,
    change : PropTypes.func,
    name : PropTypes.string,
    age : PropTypes.number
};
export default person;