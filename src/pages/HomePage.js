import React from "react";
/*import background from "../images/background.jpg";*/
import { Heading2, Nav, LinkHome, PHome, DivButtons } from "../components/Shared";
import imgLogo from "../images/logo.png";

export const HomePage = () => {
  return (
    <div>
      <Nav>
        <img src={imgLogo} alt="Moodify logo" height="40px" />
      </Nav>
      <PHome>
        A curated library that matches or changes your mood
      </PHome>
      <Heading2>
         I want...
      </Heading2>
      <DivButtons>
        <LinkHome to="/mood-selection"> to tell you how I feel </LinkHome>
        <LinkHome to="/mood-quiz"> for you to tell me how I feel </LinkHome>
      </DivButtons>
      {/*<img src={background} alt="Background" width={"100%"} />*/}
    </div>
  );
};
