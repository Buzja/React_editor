import React from 'react';

function Range({name,value,min,max,onChangeFunc}){
    return(
        <div className="range">
            <label>
                <div>{name}</div>
                <div>{value}</div>
            </label>
            <input 
            id={name}
            type="range" 
            name={name} 
            step = "1"
            min={min}
            max={max}
            onChange={onChangeFunc}
            />
        </div>
    );
}

export default Range;