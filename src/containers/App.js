import React, { Component } from 'react';
import logo from '../logo.svg';
import './App.css';
import Person from '../components/Person/Person';
import School from '../components/School/School';
class App extends Component {
  state = {
    person : [
      { name : 'Max', age : 29  ,id:"feafe"},
      { name : 'Manu', age:30 ,id:"f4eag"},
      { name: 'Amy', age:90 ,id:"32r3f"}
    ],
    showPersons : false
  }
  switchNameHandler = () =>{
    
    this.setState({
      person: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  }
  showPersons = () =>{
    let cur = this.state.showPersons;
    this.setState({showPersons:!cur});
  }
  deleteHandler = (id) =>{
    let newPerson = this.state.person.filter(person => person.id!=id);
    this.setState({person : newPerson});

  }
  changeHandler = (event,id) =>{
    let personIndex = this.state.person.findIndex( p => p.id === id);
    let personNewName = event.target.value;
    let newPersons = [...this.state.person];
    newPersons[personIndex].name = personNewName;
    this.setState({person : newPersons});
    
  }
  render() {
    const style={
      backgroundColor:'white',
      font:'inherit',
      border:'1x solid blue',
      padding:'8px',
      cursor:'pointer'
    }
    let personBlock = null;
    if(this.state.showPersons){
      
      personBlock = (
        <div>
          {this.state.person.map( (p) => {
            return <Person 
            name={p.name} 
            age={p.age}
            delete={()=>{return this.deleteHandler(p.id)}}
            change={(event)=> {return this.changeHandler(event,p.id)}}
            key={p.id}/>
          })}
        </div>
      )
    }
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <School ></School>
        
        <p></p>
        <button style={style} onClick={this.showPersons}>Show Person</button>
        
        
        {personBlock}
         
      </div>
    );
  }
}

export default App;
