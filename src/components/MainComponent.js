import React, {useEffect} from 'react';
import Header from './HeaderComponent';
import Content from './ContentComponent';
import { CNFT } from '../shared/cnfts';

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
            <Header darkMode={darkMode} handleClickDarkMode={toggleDarkMode} />
            <Content className={darkMode ? "main--dark" : ""} darkMode={darkMode} cnft={CNFT}/>
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
        </>
    );
}

export default Main;