import React from 'react';


function SubHeader(props) {
    return (
    <>
            <h1 className={props.darkMode ? "sub-header-dark" : "sub-header"}>Don't Trust, Verify.</h1>
    </>
    )
}

export default SubHeader;