import React from "react";
import Britney from "../images/BritneySpears.png";
import { Link } from "react-router-dom";

export const HomePage = () => {
  return (
    <div>
      <h1> Moodify </h1>
      <p>A curated library that matches or changes your mood</p>
      <img src={Britney} alt="David Bowie" />
      <div>
        <h2> I want... </h2>
        <Link to="/mood-selection"> to tell you how I feel </Link>
        <Link to="/mood-quiz"> for you to tell me how I feel </Link>
      </div>
    </div>
  );
};
