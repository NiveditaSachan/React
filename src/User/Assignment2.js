import React, { Component } from "react";
import InputAss2 from "./User/InputAss2.js";
import "./User/User.css";
import Validation from "./User/Validation.js";
import CharComponent from "./User/CharComponent";

class App extends Component{

    state={
        length: "0",
        text: "",
        char: [""]
    }

    changeHandler(event){
        const val=event.target.value;
        const newLen=val.toString().length;
        const arr=val.split('');
        console.log("array is :" + arr);

        this.setState({
            length: newLen,
            text: val,
            char: arr

        });
    };

    deleteHandler(index){
        const ch=[...this.state.char];
        console.log(ch.splice(index,1));
        this.setState({
            char: ch
        })
    }



    render(){

        return (
            <div className="User">
                <InputAss2
                    change={this.changeHandler.bind(this)}/>
                <p>Length of the Input Element is {this.state.length}</p>
                <Validation
                    len={this.state.length}/>

                <div>
                    {this.state.char.map(

                        (c,index)=> {return (< CharComponent
                            charTo={this.state.char[index]}
                            removeChar={this.deleteHandler.bind(this,index)}
                        />);}
                    )}
                </div>

            </div>
        );
    }

}

export default App;