import React from "react";

function Number({number,clickNumber}){
    return(
        <span onClick={()=>clickNumber(number)}>{number}</span>
    )
}

export default Number;