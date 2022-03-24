import React from 'react';
import Header from './HeaderComponent';
import Content from './ContentComponent';
import { CNFT } from '../shared/cnfts';

function Main() {

    const [darkMode, setDarkMode] = React.useState(false)

    function toggleDarkMode() {
        setDarkMode(prev => !prev)
    }

    return (
        <>
            <Header darkMode={darkMode} handleClickDarkMode={toggleDarkMode} />
            <Content className={darkMode ? "main--dark" : ""} darkMode={darkMode} cnft={CNFT}/>
        </>
    );
}

export default Main;