import React from 'react';
import { Row, Col, Container } from 'reactstrap';

function Featured(props) {
    return (
        <>
        <div className={props.darkMode ? "featured--dark" : ""}>
            <div className="featured">
            <Container>
                <Row>
                    <h1 className="featured-text">Featured this Week</h1>
                </Row>
                <Row>
                    <div className={props.darkMode ? "featured-projects-dark" : "featured-projects"}>
                        <p>Blue Chip</p>
                        <p>Established and Growing (Mid-sized)</p>
                        <p>Upcoming Mint</p>
                    </div>
                </Row>
            </Container>
            </div>
        </div>
        </>
    );
}

export default Featured;