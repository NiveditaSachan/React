import React from 'react';

const InputAss2= (props) => {
    const style={
        textAlign : "centre",
        backgroundColor: "lightblue",
        padding: "5px",
        border: "2px solid blue ",
        margin: "5px 5px"

    };

    return (
        <div style={style}>
            <input type="text" name="textInput" onChange={props.change}/>
        </div>
    )

};

export default InputAss2;