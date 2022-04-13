import React from 'react';
import SubHeader from '../components/SubHeaderComponent';
import Featured from '../components/FeaturedComponent';
import Content from '../components/ContentComponent';
import { CNFT } from '../shared/cnfts';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';

function Home(props) {
    return (
        <>
        <Parallax pages={4}>
            <ParallaxLayer
            enabled={false}
            sticky={{start: 0, end: .3}}
            style={{zIndex: '-10'}}
            >
                <SubHeader darkMode={props.darkMode}/>
            </ParallaxLayer>
            <ParallaxLayer
            offset={.58}
            speed={1}
            >
                <Featured className={props.darkMode ? "main--dark" : ""} darkMode={props.darkMode} cnft={CNFT}/>
                <Content className={props.darkMode ? "main--dark" : ""} darkMode={props.darkMode} cnft={CNFT}/>
            </ParallaxLayer>
        </Parallax>
        </>
    )
}

export default Home;