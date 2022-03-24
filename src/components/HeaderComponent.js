import React from 'react';
import {Nav} from 'reactstrap';

function Header(props) {
    return (
        <>
        <Nav className={props.darkMode ? "dark" : ""}>
            <img className="logo" src="/images/cardano-ada-logo.png"></img>
            <h1>cnftTOP</h1>
            <div 
                className="toggler" 
            >
                <p className="toggler--light">Light</p>
                <div 
                    className="toggler--slider"
                    onClick={props.handleClickDarkMode}
                >
                    <div className="toggler--slider--circle"></div>
                </div>
                <p className="toggler--light">Dark</p>
            </div>
        </Nav> 
        </>
    );
}

export default Header;


  

