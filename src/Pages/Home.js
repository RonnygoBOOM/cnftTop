import React from "react";
import SubHeader from "../components/SubHeaderComponent";
import Featured from "../components/FeaturedComponent";
import Content from "../components/ContentComponent";
import { CNFT } from "../shared/cnfts";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import Footer from "../components/FooterComponent";

function Home(props) {
  return (
    <>
      <Parallax pages={3.3}>
        {/* I need to find a way to get this to work with Position relative, and adjust the page length dynamically Use Pixels, not VH <- why*/}

        <ParallaxLayer
          enabled={false}
          sticky={{ start: 0, end: 0.3 }}
          style={{ zIndex: "-1" }}
        >
          <SubHeader darkMode={props.darkMode} />
        </ParallaxLayer>
        <ParallaxLayer offset={0.48} speed={1}>
          <Featured
            className={props.darkMode ? "main--dark" : ""}
            darkMode={props.darkMode}
            cnft={CNFT}
          />
          <Content
            handleIncrementNumber={props.handleIncrementNumber}
            renderNumber={props.renderNumber}
            className={props.darkMode ? "main--dark" : ""}
            darkMode={props.darkMode}
            cnft={CNFT}
          />
        </ParallaxLayer>
        <Footer />
      </Parallax> 
    </>
  );
}

export default Home;
