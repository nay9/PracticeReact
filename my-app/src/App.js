import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person.js';

class App extends Component {
state = {
  persons: [
    {name: 'rene', age: 26},
    {name: 'jesus', age: 2000},
    {name: 'dog', age: 6},
  ]
}

switchNameHandler = () =>{
  this.setState({
    persons: [
    {name: 'potato', age: 26},
    {name: 'jesus', age: 2000},
    {name: 'dog', age: 6},
  ]
})
}


  render() {
    return (
      <div className="App">
        <h1>Hi</h1>
        <button onClick={this.switchNameHandler}>Switch Name</button>

        <Person name={this.state.persons[0].name} age={this.state.persons[0].age}>My Hobbies: Poo</Person>
        <Person name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Poo</Person>
        <Person name={this.state.persons[2].name} age={this.state.persons[2].age}>My Hobbies: Poo</Person>      </div>
    );
   }
}

export default App;
