import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';
import School from './School/School';
class App extends Component {
  state = {
    person : [
      { name : 'Max', age : 29},
      { name : 'Manu', age:30},
      { name: 'Amy', age:90}
    ]
  }
  switchNameHandler = () =>{
    console.log("clicked");
    this.setState({
      person: [
        { name: 'Maximilian', age: 28 },
        { name: 'Manu', age: 29 },
        { name: 'Stephanie', age: 27 }
      ]
    });
  }

  render() {
    const style={
      backgroundColor:'white',
      font:'inherit',
      border:'1x solid blue',
      padding:'8px',
      cursor:'pointer'
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
        <button style={style} onClick={this.switchNameHandler}>Switch name</button>
        <Person name={this.state.person[0].name} age = {this.state.person[0].age}/>
        <Person name={this.state.person[1].name} age = {this.state.person[1].age}/>
        <Person name={this.state.person[2].name} age = {this.state.person[2].age}/>
         
      </div>
    );
  }
}

export default App;
