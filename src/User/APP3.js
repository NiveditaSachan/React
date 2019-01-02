import React, { Component } from "react";
import "./Persons/Person.css";
import "./App.css"
import Person from './Persons/Person.js';

class App extends Component{

    state= {
        Persons : [
            {name: "max", age: 27},
            {name: "riya", age: 28},
            {name:"payal", age: 25}
        ]
    }

    switchNameHandler= ()=>{
        console.log("Was Clicked");
        this.setState( {
            Persons : [
                {name: "maxilion", age: 27},
                {name: "riya", age: 28},
                {name:"payal", age: 67}
            ]
        })
    }
    render(){

        const style={
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px'
        };

        return(
            <div className="app">
                <h1>Ok, So This is working now</h1>
                <button style={ style} onClick={this.switchNameHandler}>Switch Names</button>

                <Person
                    name={this.state.Persons[0].name}
                    age={this.state.Persons[0].age}/>
                <Person
                    name={this.state.Persons[1].name}
                    age={this.state.Persons[1].age}
                    click={this.switchNameHandler}
                > Ho Ho Ho</Person>
                <Person
                    name={this.state.Persons[2].name}
                    age={this.state.Persons[2].age}/>
            </div>

        );
    }
}

export default App;