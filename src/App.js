import React, { Component } from "react";
import "./Persons/Person.css";
import "./App.css"
import Person from './Persons/Person.js';

class App extends Component{

  state= {
    Persons : [
      {id:'as', name: "Nivedita", age: 34},
      {id:'erwe', name: "Siddhartha", age: 5},
      {id:'hdfg', name:"Aryan", age: 4}
    ],
    otherState: "otherState",
    showPerson: false
  }

  toggleSwitchHandler=()=>{
    const doesShow=this.state.showPerson;
    this.setState({showPerson: !doesShow});

  }

  nameChangeHandler=(event, id)=>{
    const personIndex=this.state.Persons.findIndex(p=>p.id===id);
    const person={...this.state.Persons[personIndex]};

    person.name=event.target.value();

    const persons=[...this.state.Persons];
    persons[personIndex]=person;

    //const name=event.target.value;
    this.setState( {Persons : persons});
  }

  deletePersonHandler =(indexPerson)=>{
    const Person=[...this.state.Persons];
    Person.splice(indexPerson,1);
    this.setState({Persons: Person});

  }

  render(){

    const style={
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };

    let Persons=null;

    if(this.state.showPerson){
      Persons =(
          <div >
            {this.state.Persons.map((Per,index) => {
              return (<Person
                      name={Per.name}
                      age={Per.age}
                      click={this.deletePersonHandler.bind(this,index)}
                      key={Per.id}
                      changed={(event,id)=>this.nameChangeHandler(event, Per.id)}/>
              );
            })}
          </div> )

      style.backgroundColor='red';

    }

    const classes=[];
      if(this.state.Persons.length<=2){
        classes.push('red');
      }
      if(this.state.Persons.length<=1){
        classes.push('bold');
      }

    return(
        <div className="App">
          <h1>Hi ! I'm React App</h1>
          <p className={classes.join(' ')}>Ok, So This is working now</p>
          <button
              style={ style}
              onClick={this.toggleSwitchHandler}>Toggle Name</button>
          {Persons}
        </div>


    );
  }
}

export default App;
