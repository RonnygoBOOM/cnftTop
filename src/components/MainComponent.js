import React, {useEffect} from 'react';
import Header from './HeaderComponent';
// import Footer from './FooterComponent';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
import Cnft from '../Pages/Cnft';

function Main() {

    const [darkMode, setDarkMode] = React.useState(false)
    const [renderNumber, setRenderNumber] = React.useState(1)
    //I need to lift state up from Home to Main for CNFT data so I can call a CNFT by its id. 
    const [currentCnft, setCurrentCnft] = React.useState(0)

    function handleSetCurrentCnft(selection) {
        setCurrentCnft(prev => selection)
        console.log(selection);
        // I would like to run the js code on the next line to navigate to /cnft path but it wont update the currentCnft AND navigate there. SetTimeout caused an infinite loop. Async await??
        // window.location.href='/cnft';
    }

    function incrementNumber() {
        setRenderNumber(prev => prev+2)
    }

    function toggleDarkMode() {
        setDarkMode(prev => !prev)
    }


    useEffect(() => {
      document.body.classList.toggle('darkMode-on', darkMode);
      return () => {document.body.classList.remove('darkMode-on')}
    },[darkMode])

    return (
        <>
        <Header darkMode={darkMode} handleClickDarkMode={toggleDarkMode} />
        <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home handleIncrementNumber={incrementNumber} renderNumber={renderNumber} darkMode={darkMode} handleSetCurrentCnft={handleSetCurrentCnft}/>} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    {/* Why isnt my /cnft path rendering?! */}
                    <Route path="/cnft" element={<Cnft darkMode={darkMode} currentCnft={currentCnft} />} />
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