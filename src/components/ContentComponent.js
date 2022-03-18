import React from 'react';
import { Row, Col } from 'reactstrap';

function Content(props) {

    const myCard = props.cnft.map(item => {
        return (
            <Row key={item.id} className="item">
                <Col>
                    <img src={item.image}></img>
                    <p>{item.name}</p>
                </Col>
                <Col className="description">
                    <p>{item.description}</p>
                    <p>Rating: {item.rating}</p>
                    <p className="floor">Floor Price: {item.floorPrice}₳</p>
                </Col>
            </Row>
        );
    })

    return (
        <>
            {myCard}
        </>
    );
}

export default Content;