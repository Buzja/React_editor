import React from 'react';

function Header(props){
        return(
            <header className="header">
                <div className="title">{props.title}</div>
            </header>
        );
}

export default Header;