import React from "react";
import Footer from "../components/FooterComponent";
import { CNFT } from "../shared/cnfts";

function Cnft(props) {
    const chosenCnft = CNFT.filter(
      (itemFilter) => props.currentCnft === itemFilter.id
    ).map((item) => {
      return (
        <div style={{ position: "relative", alignSelf: "center", padding: "3em" }} key={item.id}>
          <p style={{ position: "relative", alignSelf: "center", padding: "3em" }}>Welcome to {item.name} CNFT</p>
          <div className="chosen-cnft-page">
            <img
              alt={item.alt}
              className="chosen-cnft-image"
              src={item.image}
            ></img>
          </div>
        </div>
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
