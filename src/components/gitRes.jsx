import React from "react";

function Disp(props) {
    return(
        <>
        <h2>{props.name}</h2>
        <img src={props.url} height="200px" width="200px"  />
        <p>{props.bio}</p>
   
    
        </>
    )
    
}
export default Disp