import React from 'react';

const Validation= (props) =>{

   const lenEntered=props.len;
   let allowed=null;

    if(lenEntered===0){
        allowed=(<div>
            <p>Enter the Text</p>
        </div>);
    }
   else if(lenEntered<5 ){
    allowed= (
        <div>
            <p>Length is too short</p>
        </div>
    )}
       else if(lenEntered>15){
       allowed=(<div>
               <p>Length is too long</p>
           </div>)
       }
       else if(lenEntered==0){
           allowed=null;
   }


    return (
        <div>
            <p>{allowed}</p>
        </div>
    );

}

export default Validation;