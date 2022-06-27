import React from "react";
import Footer from "../components/FooterComponent";

function Cnft() {
  const chosenCnft = props.cnft
      return (
        <React.Fragment key={filteredProject.id}>
          <div className="featured-project">
            <img
              alt={filteredProject.alt}
              className="featured-project-image"
              src={filteredProject.image}
            ></img>
          </div>
        </React.Fragment>
      );

  return (
    <>
      <div
        className={props.darkMode ? "featured--dark-outer" : "featured-outer"}
      >
        <div className={props.darkMode ? "featured--dark" : "featured"}>
          <Container>
            <Row>
              <h1 className="featured-text">Featured this Week</h1>
            </Row>
            <Row>
              <div
                className={
                  props.darkMode
                    ? "featured-projects-dark"
                    : "featured-projects"
                }
              >
                {blueChip}
                {midRange}
                {upcoming}
              </div>
            </Row>
          </Container>
        </div>
      </div>
      <h1 style={{ position: "relative", alignSelf: "center", padding: "3em" }}>
        Cnft
      </h1>
      <Footer />
    </>
  );
}

export default Cnft;
