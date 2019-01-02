import React from 'react';

const CharComponent = (props) =>{

    const style={
        background: "green",
        color: "white",
        display: "inline-block",
        padding: "16px",
        textallign: "centre",
        margin: "16px",
        border: "1px solid black"
    }

    return(
        <div style={{style}}>
            <p onClick={props.removeChar}> value of char is : {props.charTo}</p>
        </div>
    ) ;

}

export default CharComponent;