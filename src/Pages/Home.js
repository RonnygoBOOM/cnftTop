import About from "./About"
import React from 'react';
import SubHeader from '../components/SubHeaderComponent';
import Featured from '../components/FeaturedComponent';
import Content from '../components/ContentComponent';
import { CNFT } from '../shared/cnfts';

function Home(props) {
    return (
        <>
        <SubHeader darkMode={props.darkMode}/>
        <Featured className={props.darkMode ? "main--dark" : ""} darkMode={props.darkMode} cnft={CNFT}/>
        <Content className={props.darkMode ? "main--dark" : ""} darkMode={props.darkMode} cnft={CNFT}/>
        </>
    )
}

export default Home;