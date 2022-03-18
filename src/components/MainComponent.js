import React from 'react';
import Header from './HeaderComponent';
import Content from './ContentComponent';
import { CNFT } from '../shared/cnfts';

function Main() {
    return (
        <>
            <Header />
            <Content cnft={CNFT}/>
        </>
    );
}

export default Main;