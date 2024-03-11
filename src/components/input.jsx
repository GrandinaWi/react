import React from 'react';

function Input({value,value2,action}){
    return (
        <input type={"number"} value={action ? value2 : value} className="screen"/>
    )
}

export default Input;