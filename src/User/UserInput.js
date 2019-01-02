import React, {Component} from 'react';
import "./User.css"

const style={
    fontcolor: 'red',
    padding: 10,
    color: 'red'
}
const UserInput =(props)=>{


        return (
            <div className="User">
                <input style={style} type="text" placeholder="userName" onChange={props.change} value={props.currentName}></input>
            </div>
        )

}


export default UserInput;