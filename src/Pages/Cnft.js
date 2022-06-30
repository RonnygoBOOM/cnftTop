import React from "react";
import Footer from "../components/FooterComponent";
import { CNFT } from "../shared/cnfts";

function Cnft(props) {
  const chosenCnft = CNFT.filter(
    (itemFilter) => props.currentCnft === itemFilter.id
  ).map((item) => {
    return (
      <>
        <div
          style={{ position: "relative", alignSelf: "center", padding: "0em" }}
          key={item.id}
        >
          <p
            style={{
              position: "relative",
              alignSelf: "center",
              padding: "0em",
            }}
          >
            {item.name}
          </p>
          <div className="chosen-cnft-page">
            <img
              alt={item.alt}
              className="chosen-cnft-image"
              src={item.image}
            ></img>
          </div>
          <p>{item.description}</p>
        </div>
        <div className={props.darkMode ? "background--dark" : "background--light"}>
          <div className="chart-border">Border</div>
          <div className="popularity-chart">
            <p>Popularity</p>
          </div>
          <div className="popularity-bar-rounded"></div>
          <div className="popularity-bar-shine"></div>
          <div className="activity-chart">
            <p>Activity</p>
          </div>
          <div className="activity-bar-rounded"></div>
          <div className="activity-bar-shine"></div>
          <div className="utility-chart">
            <p>Utility</p>
          </div>
          <div className="utility-bar-rounded"></div>
          <div className="utility-bar-shine"></div>
        </div>
      </>
    );
  });
  return (
    <>
      <h1 style={{ position: "relative", alignSelf: "center", padding: "3em" }}>
        Cnft
      </h1>
      {chosenCnft}
      <Footer />
    </>
  );
}

export default Cnft;
