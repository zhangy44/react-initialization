import React,{useState} from 'react';

const school = (props) =>{
    const[schoolName, setSchool] = useState("");
    const changeName = (event) =>{
        console.log("changeName")
        setSchool(event.target.value);
    }    
    return (
        
        <div>
            <p>I'm a student, I go to {schoolName}</p>
            <input type ="text" onChange={changeName}></input>
        </div>)
        
}

export default school;