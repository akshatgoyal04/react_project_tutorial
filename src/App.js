import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';


class App extends Component {
  state = {
    persons: [
      { id: '1', name: 'Max', age: 28 },
      { id: '2', name: 'Manui', age: 22 },
      { id: '3', name: 'Maxiii', age: 21 }

    ],
    otherState: 'Some other Value',
    showPersons: false
  }


  switchNameHandler = (Newname) => {
    //console.log('it was clicked');

    this.setState({
      persons: [
        { name: Newname, age: 268 },
        { name: 'Siddhant', age: 26 },
        { name: 'Maxico', age: 29 }

      ]
    }
    )
  }



  nameChangedHandler = ( event, id ) => {
const personIndex = this.state.persons.findIndex(p => {
  return p.id === id;

});

  const person = {
    ...this.state.persons[personIndex]
  
  };

  person.name = event.target.value;

  const persons = [...this.state.persons];
  persons[personIndex] = person;
  this.setState({persons: persons});

    // this.setState({
    //   persons: [
    //     { name: 'Max', age: 28 },
    //     { name: events.target.value, age: 22 },
    //     { name: 'Maxiii', age: 27 }

    //   ]
    // }
    // )
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice();
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
    console.log('check');
  }

  togglePersonHandler = () => {
    const doesShow = this.state.showPersons;
    this.setState({ showPersons: !doesShow });
    console.log(doesShow);
  }

  render() {
    const style = {
      backgroundColor: '#ccc',
      color: 'white',
      padding: '5px 10px',
      
    }
    let persons = null;

    if (this.state.showPersons) {
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={() => this.deletePersonHandler(index)}
              name={person.name}
              age={person.age}
              key={person.id}
              changed={(event) => this.nameChangedHandler(event, person.id)} />

          })}

        </div>
      );
      
        style.backgroundColor= 'black';
       
        
    }
    // style...................
    
    const classes = [];
    if (this.state.persons.length <= 2){
      classes.push('red');
    }
    if (this.state.persons.length <= 1){
      classes.push('bold');
    }

    return (
     
      <div className="App">
        <h1>Hi, I am React Devoloper</h1>
        <p className={classes.join(' ')}>This is working</p>
        <button style={style} onClick={this.togglePersonHandler}>Switch Button</button>
        {persons}

      </div>
  
    );
    //return React.createElement('div', {className:'App'}, React.createElement('h1', 'null', 'my name is max'));
  }
}

export default App;
