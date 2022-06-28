import React from 'react';
import { Row, Col, UncontrolledTooltip } from 'reactstrap';

function Content(props) {

    const myCard = props.cnft.map(item => {
        return (
            <React.Fragment key={item.id}>
                <Row className="row--dark" onClick={() => {props.handleSetCurrentCnft(item.id)}}>
                <h3 className="cnft-name">{item.name}</h3> 
                    <div className={props.darkMode ? "card-hover-dark card-hover" : "card-hover"}>
                        <div className={props.darkMode ? "cnft-card cnft-card-dark" : "cnft-card"}>
                            <div className="circle">
                                <div className={props.darkMode ? "cnft-card-content cnft-card-content-dark" : "cnft-card-content"}>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                    <p>Rating: {item.rating}</p>
                                </div>
                                <img alt={item.alt} className="cnft-image" src={item.image}></img>   
                            </div>  
                        </div> 
                    </div>
                    <p className={props.darkMode ? "floor floor--dark" : "floor"}>Floor Price: {item.floorPrice}₳</p>
                </Row>
            </React.Fragment>
        );
    })


function twoColumns() {
    return(
    <>
        <Col sm="12" /*lg="6"*/>
            {myCard.slice(0, props.renderNumber)}
        </Col>
        <Col sm="12" /*lg="6"*/>
            {myCard.slice(props.renderNumber, (props.renderNumber+1))}
        </Col>
    </>
    )
}

    return (
        <>
            {twoColumns()}
            <div className={props.darkMode ? "background--dark" : "background--light"}>
                <div className="load-more-button">
                    <button id="uncontrolled-tooltip-load-more" className="load-more" onClick={props.handleIncrementNumber}>
                        <span className="fa fa-chevron-down"></span>
                    </button>
                    <UncontrolledTooltip placement="top" target="uncontrolled-tooltip-load-more">
                        {props.renderNumber >= myCard.length ? "More Coming Soon" : "Load More"}
                    </UncontrolledTooltip>
                </div>
            </div>
        </>
    );
}

export default Content;