import React from 'react';
import { Row, Col } from 'reactstrap';

function Content(props) {

    const myCard = props.cnft.map(item => {
        return (
            <>
                {/* <Row key={item.id} className="item">
                    <Col>
                        <img src={item.image}></img>
                        <p>{item.name}</p>
                    </Col>
                    <Col className="description">
                        <p>{item.description}</p>
                        <p>Rating: {item.rating}</p>
                        <p className="floor">Floor Price: {item.floorPrice}₳</p>
                    </Col>
                </Row> */}
                <Row key={item.id} className="row--dark">
                    <h3 className="cnft-name">{item.name}</h3> 
                    <div className={props.darkMode ? "card-hover-dark card-hover" : "card-hover"}>
                        
                        <div className={props.darkMode ? "cnft-card cnft-card-dark" : "cnft-card"}>
                            <div className="circle">
                                <div className={props.darkMode ? "cnft-card-content cnft-card-content-dark" : "cnft-card-content"}>
                                    <h2>{item.title}</h2>
                                    <p>{item.description}</p>
                                    <p>Rating: {item.rating}</p>
                                    
                                </div>
                                <img className="cnft-image" src={item.image}></img>
                                
                            </div>  
                        </div>
                          
                    </div>
                    <p className={props.darkMode ? "floor floor--dark" : "floor"}>Floor Price: {item.floorPrice}₳</p>
                </Row>
            </>
        );
    })

    return (
        <>
            {myCard}
        </>
    );
}

export default Content;