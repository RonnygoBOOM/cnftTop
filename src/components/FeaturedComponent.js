import React from 'react';
import { Row, Container } from 'reactstrap';

function Featured(props) {

    const blueChip = props.cnft.filter(project => project.featured === "blue chip").map(filteredProject => {
        return (
        <React.Fragment key={filteredProject.id}>
            <div className="featured-project">
                <img alt={filteredProject.alt} className="featured-project-image" src={filteredProject.image2 ? filteredProject.image2 : filteredProject.image}></img> 
            </div>
        </React.Fragment>
        );
    })

    const midRange = props.cnft.filter(project => project.featured === "mid range").map(filteredProject => {
        return (
        <React.Fragment key={filteredProject.id}>
            <div className="featured-project">
                <img alt={filteredProject.alt} className="featured-project-image" src={filteredProject.image2 ? filteredProject.image2 : filteredProject.image}></img> 
            </div>
            {/* <div className="featured-info">
                <h1>{filteredProject.name}</h1>
            </div> */}
        </React.Fragment>
        );
    })

    const upcoming = props.cnft.filter(project => project.featured === "upcoming").map(filteredProject => {
        return (
        <React.Fragment key={filteredProject.id}>
            <div className="featured-project">
                <img alt={filteredProject.alt} className="featured-project-image" src={filteredProject.image2 ? filteredProject.image2 : filteredProject.image}></img> 
            </div>
        </React.Fragment>
        );
    })

    return (
        <>
        <div className={props.darkMode ? "featured--dark-outer" : "featured-outer"}>
        <div className={props.darkMode ? "featured--dark" : "featured"}>
            <Container>
                <Row>
                    <h1 className="featured-text">Featured this Week</h1>
                </Row>
                <Row>
                    <div className={props.darkMode ? "featured-projects-dark" : "featured-projects"}>
                        {blueChip}
                        {midRange}
                        {upcoming}
                    </div>
                </Row>
            </Container>
        </div>
        </div>
        </>
    );
}

export default Featured;