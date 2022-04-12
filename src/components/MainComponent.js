import React, {useEffect} from 'react';
import Header from './HeaderComponent';
import {Parallax} from '@react-spring/parallax';
import { CNFT } from '../shared/cnfts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';

function Main() {

    const [darkMode, setDarkMode] = React.useState(false)

    function toggleDarkMode() {
        setDarkMode(prev => !prev)
    }

    useEffect(() => {
      document.body.classList.toggle('darkMode-on', darkMode);
      return () => {document.body.classList.remove('darkMode-on')}
    },[darkMode])

    return (
        <>
        <BrowserRouter>

                    <Header darkMode={darkMode} handleClickDarkMode={toggleDarkMode} />

                <Routes>
                    <Route path="/" element={<Home darkMode={darkMode}/>} />
                    <Route path="/about" element={<About />} />
                </Routes>
        </BrowserRouter>
            {/* <div className={darkMode ? "background--dark" : "background--light"}>
                <div className="chart-border">Border</div>
                <div className="popularity-chart"><p>Popularity</p></div>
                <div className="popularity-bar-rounded"></div>
                <div className="popularity-bar-shine"></div>
                <div className="activity-chart"><p>Activity</p></div>
                <div className="activity-bar-rounded"></div>
                <div className="activity-bar-shine"></div>
                <div className="utility-chart"><p>Utility</p></div>
                <div className="utility-bar-rounded"></div>
                <div className="utility-bar-shine"></div>
            </div> */}
        </>
    );
}

export default Main;