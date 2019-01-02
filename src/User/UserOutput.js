import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import UserInput from "./UserInput";
import "./User.css"



export const UserOutput =(props)=> {


        return (
            <div className="UserOutput">
                <p> This is first Paragraph contains userName {props.name} </p>
                <p>This is Second Paragraph </p>

            </div>
        );
}

export default UserOutput;
