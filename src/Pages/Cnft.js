import React from "react";
import Footer from "../components/FooterComponent";
import { CNFT } from "../shared/cnfts";

function Cnft(props) {
  const chosenCnft = CNFT.filter(
    (itemFilter) => props.currentCnft === itemFilter.id
  ).map((item) => {
    return (
      <div key={item.id}>
        <p>Welcome to {item.name} CNFT</p>
        {/* {console.log(item.id)}
          <div className="chosen-cnft-page">
            <img
              alt={item.alt}
              className="chosen-cnft-image"
              src={item.image}
            ></img>
          </div> */}
      </div>
    );
  });
  return (
    <>
      <p>test</p>
      {chosenCnft}
      <Footer />
    </>
  );
}

export default Cnft;
