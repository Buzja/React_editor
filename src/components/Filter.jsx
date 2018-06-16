import React from 'react';

function getFilterCssStyle(settings){
    let filterStr = "";
    for(let prop in settings){
        if(settings.hasOwnProperty(prop)){
            switch(prop){
                case "hue": filterStr +=`hue-rotate(${settings[prop]}deg)`; break;
                default:  filterStr +=`${prop}(${settings[prop]}%)`;
            }
        }
    }
    return filterStr;
}

function Filter({children,settings}){
    const filter = getFilterCssStyle(settings);
    const style = { filter };
    
    
    return(
        <div className="filter_img">
            <div className="img-container" style={style}>
                {children}
            </div>
         </div>
        
    );
}

export default Filter;